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
const entryPoints = ["inline", "polyfills", "sw-register", "styles", "vendor", "main"];
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
    const clientBundleOutputDir = './wwwroot/dist';

    const isDevBuild = !(env && env.prod);
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
            "main": [
                "./ClientApp\\main.ts"
            ],
            "polyfills": [
                "./ClientApp\\polyfills.ts"
            ],
            "styles": [
                "./ClientApp\\styles.css"
            ]
        },
        "output": {
            "path": path.join(process.cwd(), clientBundleOutputDir),
            "publicPath": clientBundleOutputDir,
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
                {
                    "exclude": [
                        path.join(process.cwd(), "ClientApp\\styles.css")
                    ],
                    "test": /\.css$/,
                    "use": [
                        "exports-loader?module.exports.toString()",
                        {
                            "loader": "css-loader",
                            "options": {
                                "sourceMap": false,
                                "importLoaders": 1
                            }
                        },
                        {
                            "loader": "postcss-loader",
                            "options": {
                                "ident": "postcss",
                                "plugins": postcssPlugins
                            }
                        }
                    ]
                },
                {
                    "exclude": [
                        path.join(process.cwd(), "ClientApp\\styles.css")
                    ],
                    "test": /\.scss$|\.sass$/,
                    "use": [
                        "exports-loader?module.exports.toString()",
                        {
                            "loader": "css-loader",
                            "options": {
                                "sourceMap": false,
                                "importLoaders": 1
                            }
                        },
                        {
                            "loader": "postcss-loader",
                            "options": {
                                "ident": "postcss",
                                "plugins": postcssPlugins
                            }
                        },
                        {
                            "loader": "sass-loader",
                            "options": {
                                "sourceMap": false,
                                "precision": 8,
                                "includePaths": []
                            }
                        }
                    ]
                },
                {
                    "exclude": [
                        path.join(process.cwd(), "ClientApp\\styles.css")
                    ],
                    "test": /\.less$/,
                    "use": [
                        "exports-loader?module.exports.toString()",
                        {
                            "loader": "css-loader",
                            "options": {
                                "sourceMap": false,
                                "importLoaders": 1
                            }
                        },
                        {
                            "loader": "postcss-loader",
                            "options": {
                                "ident": "postcss",
                                "plugins": postcssPlugins
                            }
                        },
                        {
                            "loader": "less-loader",
                            "options": {
                                "sourceMap": false
                            }
                        }
                    ]
                },
                {
                    "exclude": [
                        path.join(process.cwd(), "ClientApp\\styles.css")
                    ],
                    "test": /\.styl$/,
                    "use": [
                        "exports-loader?module.exports.toString()",
                        {
                            "loader": "css-loader",
                            "options": {
                                "sourceMap": false,
                                "importLoaders": 1
                            }
                        },
                        {
                            "loader": "postcss-loader",
                            "options": {
                                "ident": "postcss",
                                "plugins": postcssPlugins
                            }
                        },
                        {
                            "loader": "stylus-loader",
                            "options": {
                                "sourceMap": false,
                                "paths": []
                            }
                        }
                    ]
                },
                {
                    "include": [
                        path.join(process.cwd(), "ClientApp\\styles.css")
                    ],
                    "test": /\.css$/,
                    "use": [
                        "style-loader",
                        {
                            "loader": "css-loader",
                            "options": {
                                "sourceMap": false,
                                "importLoaders": 1
                            }
                        },
                        {
                            "loader": "postcss-loader",
                            "options": {
                                "ident": "postcss",
                                "plugins": postcssPlugins
                            }
                        }
                    ]
                },
                {
                    "include": [
                        path.join(process.cwd(), "ClientApp\\styles.css")
                    ],
                    "test": /\.scss$|\.sass$/,
                    "use": [
                        "style-loader",
                        {
                            "loader": "css-loader",
                            "options": {
                                "sourceMap": false,
                                "importLoaders": 1
                            }
                        },
                        {
                            "loader": "postcss-loader",
                            "options": {
                                "ident": "postcss",
                                "plugins": postcssPlugins
                            }
                        },
                        {
                            "loader": "sass-loader",
                            "options": {
                                "sourceMap": false,
                                "precision": 8,
                                "includePaths": []
                            }
                        }
                    ]
                },
                {
                    "include": [
                        path.join(process.cwd(), "ClientApp\\styles.css")
                    ],
                    "test": /\.less$/,
                    "use": [
                        "style-loader",
                        {
                            "loader": "css-loader",
                            "options": {
                                "sourceMap": false,
                                "importLoaders": 1
                            }
                        },
                        {
                            "loader": "postcss-loader",
                            "options": {
                                "ident": "postcss",
                                "plugins": postcssPlugins
                            }
                        },
                        {
                            "loader": "less-loader",
                            "options": {
                                "sourceMap": false
                            }
                        }
                    ]
                },
                {
                    "include": [
                        path.join(process.cwd(), "ClientApp\\styles.css")
                    ],
                    "test": /\.styl$/,
                    "use": [
                        "style-loader",
                        {
                            "loader": "css-loader",
                            "options": {
                                "sourceMap": false,
                                "importLoaders": 1
                            }
                        },
                        {
                            "loader": "postcss-loader",
                            "options": {
                                "ident": "postcss",
                                "plugins": postcssPlugins
                            }
                        },
                        {
                            "loader": "stylus-loader",
                            "options": {
                                "sourceMap": false,
                                "paths": []
                            }
                        }
                    ]
                },
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
                    exclude: [/wwwroot/]
                }
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
            new HtmlWebpackPlugin({
                "template": "./Views/Shared/_Layout.cshtml",
                "filename": "./Views/Shared/_Layout.cshtml",
                "hash": false,
                "inject": true,
                "compile": true,
                "favicon": false,
                "minify": false,
                "cache": true,
                "showErrors": true,
                "chunks": "all",
                "excludeChunks": [],
                "title": "Webpack App",
                "xhtml": true,
                "chunksSortMode": function sort(left, right) {
                    let leftIndex = entryPoints.indexOf(left.names[0]);
                    let rightindex = entryPoints.indexOf(right.names[0]);
                    if (leftIndex > rightindex) {
                        return 1;
                    }
                    else if (leftIndex < rightindex) {
                        return -1;
                    }
                    else {
                        return 0;
                    }
                }
            }),
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
                    "main"
                ]
            }),
            new SourceMapDevToolPlugin({
                "filename": "[file].map[query]",
                "moduleFilenameTemplate": "[resource-path]",
                "fallbackModuleFilenameTemplate": "[resource-path]?[hash]",
                "sourceRoot": "webpack:///"
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
                // Plugins that apply in production builds only
                new AotPlugin({
                    "mainPath": "main.ts",
                    "hostReplacementPaths": {
                        "environments\\environment.ts": "environments\\environment.ts"
                    },
                    "exclude": [],
                    "tsConfigPath": "ClientApp\\tsconfig.app.json"
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