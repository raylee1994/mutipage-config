const webpack = require("webpack")
const glob = require("glob")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const utils = require('./util')
const config = require("./config")
const modulesConf = require("./modules.config")
const resolveConf = require("./resolve.config")

let entries = glob.sync("src/pages/**/index.js")
let entryOptions = {}
let HtmlPlugins = []

const dev = process.env.NODE_ENV == "development";

entries.forEach(function(entry) {
    let key = entry.substring("src/pages/".length, entry.length - "/index.js".length);
    let htmlTemplate = entry.replace("index.js", "html.js");
    let chunkarr = key.split("/");
    let chunkpath = "";
    if(chunkarr.length == 1) {
        chunkpath = "scripts/" + chunkarr[0]
    }else {
        for(let i = 0; i < chunkarr.length - 1; i++) {
            chunkpath += chunkarr[i] + "/";
        }
        chunkpath += chunkarr[chunkarr.length - 1];
    }
    entryOptions[chunkpath] = entry;
    HtmlPlugins.push(new HtmlWebpackPlugin({
        template: htmlTemplate,
        filename: key + ".html",
        minify: {
            removeComments: true
        },
        chunksSortMode: 'manual',
        chunks: [/* "scripts/polyfill",  */"scripts/vendor", "scripts/manifest", "scripts/components", "scripts/common",  chunkpath]
    }))
})

/* entryOptions['scripts/polyfill'] = [
    'es5-shim',
    'es5-shim/es5-sham'
] */

module.exports = {
    entry: entryOptions,
    output: {
        path: utils.resolve("dist"),
        filename: dev ? "[name].[hash:8].js" : "[name].[chunkhash:8].js",
        publicPath: dev ? config.dev.assetsPublicPath : config.build.assetsPublicPath
    },
    module: modulesConf,
    plugins: [
        ...HtmlPlugins,
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.$": "jquery",
            "window.jQuery": "jquery"
        })
    ],
    resolve: resolveConf,
    devtool: dev ? config.dev.devtool : config.build.devtool,
    optimization: {
        namedModules: true,
        runtimeChunk: {
            name: 'scripts/manifest'
        },
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    chunks: "all",
                    minChunks: 1,
                    name: "scripts/vendor",
                    priority: 10
                },
                components: {
                    test: /[\\/]src[\\/]components[\\/]/,
                    chunks: "all",
                    name: "scripts/components"
                },
                common: {
                    test: /[\\/]src[\\/]common[\\/]/,
                    chunks: "all",
                    name: "scripts/common"
                }
            }
        }
    }
}