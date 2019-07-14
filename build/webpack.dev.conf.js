const portfinder = require("portfinder");
const config = require("./config");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const friendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const nodeNotifier = require("node-notifier");
const utils = require("./util");
const merge = require("webpack-merge");
const baseConf = require("./webpack.base.conf");
const proxy = require("./devProxy");

const styleLoader = {
  loader: "style-loader",
  options: {
    sourceMap: true
  }
};

const cssLoader = {
  loader: "css-loader",
  options: {
    sourceMap: true
  }
};

const postcssLoader = {
  loader: "postcss-loader",
  options: {
    sourceMap: true
  }
};

const lessLoader = {
  loader: "less-loader",
  options: {
    sourceMap: true
  }
};

const HOST = process.env.HOST || config.dev.host;
const PORT = process.env.PORT || config.dev.port;

const webpackConf = merge(baseConf, {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [styleLoader, cssLoader, postcssLoader]
      },
      {
        test: /\.less$/,
        use: [styleLoader, cssLoader, postcssLoader, lessLoader]
      }
    ]
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([
      {
        from: utils.resolve("src/static"),
        to: config.dev.assetsDirectory
      }
    ])
  ],
  devServer: {
    overlay: true,
    hot: true,
    compress: true,
    host: HOST,
    port: PORT,
    proxy: proxy
  },
  mode: "development"
});

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = PORT;
  portfinder
    .getPortPromise()
    .then(port => {
      process.env.port = port;
      webpackConf.devServer.port = port;
      webpackConf.plugins.push(
        new friendlyErrorsWebpackPlugin({
          compilationSuccessInfo: {
            messages: [
              `Your application is running here: http://${HOST}:${port}`
            ]
          },
          onErrors: (severity, errors) => {
            if (severity !== "error") {
              return;
            }
            const error = errors[0];
            nodeNotifier.notify({
              title: "Webpack error",
              message: severity + ": " + error.name,
              subtitle: error.file || ""
            });
          }
        })
      );
      resolve(webpackConf)
    })
    .catch(err => {
      reject(err);
    });
});
