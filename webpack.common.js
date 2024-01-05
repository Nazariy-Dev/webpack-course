const path = require("path")
var HtmlWebpackPlugin = require ('html-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
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