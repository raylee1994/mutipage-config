const webpack = require("webpack")
const glob = require("glob")
const path = require("path")
const config = require("./config")
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")
// const Purifycss = require("purifycss-webpack")
const merge = require("webpack-merge")
const utils = require("./util")
const baseConf = require("./webpack.base.conf")

const cssLoader = {
    loader: "css-loader",
    options: {
        sourceMap: true,
        minimize: true
    }
}

const postcssLoader = {
    loader: "postcss-loader",
    options: {
        sourceMap: true
    }
}

const lessLoader = {
    loader: "less-loader",
    options: {
        sourceMap: true
    }
}

const entries = glob.sync("src/pages/**/index.js")
let cssPlugins = []

entries.forEach(function(entry) {
    cssPlugins.push(new ExtractTextPlugin({
        filename:  (getPath) => {
          return getPath('[name].[md5:contenthash:hex:8].css').replace('scripts', 'style');
        }
    }))
})


module.exports = merge(baseConf, {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        cssLoader,
                        postcssLoader
                    ]
                })
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        cssLoader,
                        postcssLoader,
                        lessLoader
                    ]
                })
            }
        ]
    },
    plugins: [
        ...cssPlugins,
        // new Purifycss({
        //     paths: glob.sync(path.join(__dirname, "..", 'src/pages/**/index.ejs'))
        // }),
        new webpack.NamedChunksPlugin(), // 根据文件名来稳定你的chunkid
        new webpack.HashedModuleIdsPlugin(), //生成稳定ModuleId,新增模块后,其他模块的构建后的文件Hash没有变化，提高缓存命中率
        new CopyWebpackPlugin([
            {
                from: utils.resolve("src/static"),
                to: config.build.assetsDirectory
            }
        ])
    ],
    mode: "production"
})