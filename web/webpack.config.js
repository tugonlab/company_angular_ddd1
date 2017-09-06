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
const entryPoints = ["inline","polyfills","sw-register","styles","vendor","main"];
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
    console.log(env);
    const extractCSS = new ExtractTextPlugin('vendor.css');
    const nodeModules = path.join(process.cwd(), 'node_modules');

    const isDevBuild = !(env && env.prod);
    const sharedConfig = {
        stats: { modules: false },
        context: __dirname,
        resolve: { extensions: ['.js', '.ts'] },
        output: {
            filename: isDevBuild ? '[name].js' : '[name].min.js',
            publicPath: '/wwwroot/dist/' // Webpack dev middleware, if enabled, handles requests for this URL prefix
        },
        module: {
            rules: [
                { test: /\.html$/, include: /ClientApp/, use: [{ loader: 'raw-loader', options: { minimize: true, removeAttributeQuotes: false } }] },
                {
                    "test": /\.ts?$/,
                    use: isDevBuild ?
                        [
                            { loader: 'awesome-typescript-loader?silent=true' },
                            { loader: 'angular2-template-loader' }
                        ] :
                        [
                            {
                                loader: 'babel-loader',
                            },
                            { loader: "@ngtools/webpack" },

                        ],
                    include: /ClientApp/,
                    exclude: [/wwwroot/, /ClientApp\/dist/]
                },
                { test: /\.css$/, include: /ClientApp/, exclude: /node_modules/, use: ['to-string-loader', 'css-loader'] },
                { test: /\.css(\?|$)/, exclude: [/ClientApp/], use: extractCSS.extract({ use: ['css-loader'] }) },
                { test: /\.(png|jpg|jpeg|gif|woff|woff2|eot|ttf|svg)(\?|$)/, use: 'url-loader?limit=100000' }
            ]
        },
        //plugins: []
    };

    const clientBundleOutputDir = './wwwroot/dist';
    const clientBundleConfig = merge(sharedConfig, {
        entry: {
            //'admin': './ClientApp/app/admin/admin.module.ts',
            'main-client': './ClientApp/boot-client.ts',
            'polyfills': './ClientApp/polyfills.ts',
            //"styles": [
            //    "./ClientApp/app/admin/_layout/scss/style.scss"
            //]
        },
        output: {
            "path": path.join(__dirname, clientBundleOutputDir),
            "chunkFilename": "[id].chunk.js"
        },
        plugins: [
            new ProgressPlugin(),
            extractCSS,

            new CommonsChunkPlugin({
                "name": "inline",
                "minChunks": null
            }),
            new CommonsChunkPlugin({
                "name": "vendor",
                "minChunks": (module) => module.resource &&
                    (module.resource.startsWith(nodeModules) || module.resource.startsWith(genDirNodeModules)),
                "chunks": [
                    "main-client"
                ]
            }),
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
                    "mainPath": path.join(__dirname, "ClientApp/boot-client.ts"),
                    "entryModule": path.join(__dirname, 'ClientApp/app/app.module#AppModule'),
                    "exclude": [],
                    "tsConfigPath": path.join(__dirname, "ClientApp/tsconfig.app.json"),
                    "skipCodeGeneration": isDevBuild
                }),
                // Plugins that apply in production builds only
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
                    threshold: 256,
                    minRatio: 0.8
                })
            ])
    });

    return [clientBundleConfig];
};
