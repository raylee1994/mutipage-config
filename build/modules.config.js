module.exports = {
    rules: [
        {
            test: /\.html$/,
            loader: "html-loader",
            options: {
                attrs: ['img:src']
            }
        },
        {
            test: /\.ejs$/,
            loader: "ejs-loader"
        },
        {
            test: /\.js$/,
            loader: "babel-loader",
            exclude: /node_modules/
        },
        {
            test: /\.(png|jpe?g|gif|svg)$/,
            loader: "url-loader",
            options: {
                limit: 8192,
                name: "images/[name].[hash:8].[ext]"
            }
        }
    ]
}