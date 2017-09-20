const merge = require('webpack-merge');
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;
const CompressionPlugin = require('compression-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

const fs = require('fs');
const path = require('path');
const ProgressPlugin = require('webpack/lib/ProgressPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const postcssUrl = require('postcss-url');
const cssnano = require('cssnano');

const { NoEmitOnErrorsPlugin, SourceMapDevToolPlugin, NamedModulesPlugin } = require('webpack');
const { GlobCopyWebpackPlugin, BaseHrefWebpackPlugin } = require('@angular/cli/plugins/webpack');
const { CommonsChunkPlugin, UglifyJsPlugin } = require('webpack').optimize;
const { AotPlugin } = require('@ngtools/webpack');

const nodeModules = path.join(process.cwd(), 'node_modules');
const realNodeModules = fs.realpathSync(nodeModules);
const genDirNodeModules = path.join(process.cwd(), 'ClientApp', '$$_gendir', 'node_modules');
const entryPoints = ["inline", "polyfills", "sw-register",/* "styles", */"vendor", "admin", "main", "pages"];
const minimizeCss = false;
const baseHref = "";
const deployUrl = "";
const postcssPlugins = function () {
    // safe settings based on: https://github.com/ben-eb/cssnano/issues/358#issuecomment-283696193
    const importantCommentRe = /@preserve|@license|[@#]\s*source(?:Mapping)?URL|^!/i;
    const minimizeOptions = {
        autoprefixer: false,
        safe: true,
        mergeLonghand: false,
        discardComments: { remove: (comment) => !importantCommentRe.test(comment) }
    };
    return [
        postcssUrl({
            url: (URL) => {
                // Only convert root relative URLs, which CSS-Loader won't process into require().
                if (!URL.startsWith('/') || URL.startsWith('//')) {
                    return URL;
                }
                if (deployUrl.match(/:\/\//)) {
                    // If deployUrl contains a scheme, ignore baseHref use deployUrl as is.
                    return `${deployUrl.replace(/\/$/, '')}${URL}`;
                }
                else if (baseHref.match(/:\/\//)) {
                    // If baseHref contains a scheme, include it as is.
                    return baseHref.replace(/\/$/, '') +
                        `/${deployUrl}/${URL}`.replace(/\/\/+/g, '/');
                }
                else {
                    // Join together base-href, deploy-url and the original URL.
                    // Also dedupe multiple slashes into single ones.
                    return `/${baseHref}/${deployUrl}/${URL}`.replace(/\/\/+/g, '/');
                }
            }
        }),
        autoprefixer(),
    ].concat(minimizeCss ? [cssnano(minimizeOptions)] : []);
};

module.exports = (env) => {
    console.log(env || "dev");
    const extractCSS = new ExtractTextPlugin('vendor.css');
    const nodeModules = path.join(process.cwd(), 'node_modules');
    const clientBundleOutputDir = './wwwroot/dist/';

    const isDevBuild = !(env && env.prod);
    console.log(isDevBuild);
    const clientBundleConfig = {
        "resolve": {
            "extensions": [
                ".ts",
                ".js"
            ],
            "modules": [
                "./node_modules",
                "./node_modules"
            ],
            "symlinks": true
        },
        "resolveLoader": {
            "modules": [
                "./node_modules",
                "./node_modules"
            ]
        },
        "entry": {
            "admin": [
                "./ClientApp/app/admin/admin.module.ts"
            ],
            "pages": [
                "./ClientApp/app/pages/pages.module.ts"
            ],
            "main": [
                "./ClientApp/main.ts"
            ],
            "polyfills": [
                "./ClientApp/polyfills.ts"
            ],

            // "styles": [
            //     "./ClientApp/styles.css"
            // ]
        },
        "output": {
            "path": path.join(__dirname, clientBundleOutputDir),
            "publicPath":  "dist/",
            "filename": isDevBuild ? "[name].js" : "[name].min.js",
            "chunkFilename": "[id].chunk.js"
        },
        "module": {
            "rules": [
                {
                    "enforce": "pre",
                    "test": /\.js$/,
                    "loader": "source-map-loader",
                    "exclude": [
                        /\/node_modules\//
                    ]
                },
                {
                    "test": /\.html$/,
                    "loader": "raw-loader"
                },
                {
                    "test": /\.(eot|svg|cur)$/,
                    "loader": "file-loader?name=[name].[hash:20].[ext]"
                },
                {
                    "test": /\.(jpg|png|webp|gif|otf|ttf|woff|woff2|ani)$/,
                    "loader": "url-loader?name=[name].[hash:20].[ext]&limit=10000"
                },
                { test: /\.ts$/, include: /ClientApp/, use: isDevBuild ? ['awesome-typescript-loader?silent=true', 'angular2-template-loader'] : ['babel-loader','@ngtools/webpack'] },
                { test: /\.css$/, use: [ 'to-string-loader', isDevBuild ? 'css-loader' : 'css-loader?minimize' ] },

            ]
        },
        "plugins": [
            new NoEmitOnErrorsPlugin(),
            new GlobCopyWebpackPlugin({
                "patterns": [
                    "assets",
                    "favicon.ico"
                ],
                "globOptions": {
                    "cwd": path.join(process.cwd(), "ClientApp"),
                    "dot": true,
                    "ignore": "**/.gitkeep"
                }
            }),
            new ProgressPlugin(),
            new ExtractTextPlugin("[name].css"),
            new BaseHrefWebpackPlugin({}),
            new CommonsChunkPlugin({
                "minChunks": 2,
                "async": "common"
            }),
            new CommonsChunkPlugin({
                "name": [
                    "inline"
                ],
                "minChunks": null
            }),
            new CommonsChunkPlugin({
                "name": [
                    "vendor"
                ],
                "minChunks": (module) => {
                    return module.resource
                        && (module.resource.startsWith(nodeModules)
                            || module.resource.startsWith(genDirNodeModules)
                            || module.resource.startsWith(realNodeModules));
                },
                "chunks": [
                    "main",
                     "admin",
                     "pages"
                ]
            }),
            new NamedModulesPlugin({}),
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
                Popper: ['popper.js', 'default'],
                // In case you imported plugins individually, you must also require them here:
                Util: "exports-loader?Util!bootstrap/js/dist/util",
                Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
            })
        ].concat(isDevBuild ? [
            // Plugins that apply in development builds only
            new webpack.SourceMapDevToolPlugin({
                filename: '[file].map', // Remove this line if you prefer inline source maps
                moduleFilenameTemplate: path.relative(clientBundleOutputDir, '[resourcePath]') // Point sourcemap entries to the original file locations on disk
            })
        ] : [
                new AotPlugin({
                    hostReplacementPaths: {
                        'environments/environment.ts': 'environments/environment.prod.ts'
                    },
                    "mainPath": "main.ts",
                    //"entryModule": path.join(__dirname, 'ClientApp/app/app.module#AppModule'),
                    "exclude": [],
                    "tsConfigPath": "ClientApp/tsconfig.app.json",
                    "skipCodeGeneration": isDevBuild
                }),
                new webpack.LoaderOptionsPlugin({
                    minimize: true,
                    debug: false
                }),
                new webpack.optimize.UglifyJsPlugin({
                    //mangle: true,
                    compress: {
                        hoist_vars: true,
                        warnings: false,
                    },
                    output: {
                        comments: false
                    },
                    sourceMap: false
                }),
                new CompressionPlugin({
                    asset: "[path].gz[query]",
                    algorithm: "gzip",
                    test: /\.js$|\.css$|\.html$/,
                    threshold: 10,
                    minRatio: 0.8
                })
            ]),
        "node": {
            "fs": "empty",
            "global": true,
            "crypto": "empty",
            "tls": "empty",
            "net": "empty",
            "process": true,
            "module": false,
            "clearImmediate": false,
            "setImmediate": false
        },
        "devServer": {
            "historyApiFallback": true
        }
    }
    return [clientBundleConfig];
};
