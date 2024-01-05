const path = require("path")
var HtmlWebpackPlugin = require ('html-webpack-plugin');


module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.[contenthash].js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/template.html"
    })],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader",// 3. Injects styles into dom
                    "css-loader",  // 2. Turns css into commonJS
                    "sass-loader"  // 1. Turns sass into css
                ]
            }
        ]
    },

}