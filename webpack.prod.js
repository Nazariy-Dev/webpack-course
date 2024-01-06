const path = require("path")
const common = require("./webpack.common");
const {merge} = require ("webpack-merge");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: "[name].[contenthash].bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true
    },
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin(),
            new HtmlWebpackPlugin({
                template: "./src/template.html",
                inject: 'body',
                minify: {
                    removeAttributeQuotes: true,
                    collapseInlineTagWhitespace: true,
                    removeComments: true
                }
            })
        ]
    },
    plugins: [new MiniCssExtractPlugin({
        filename: "[name].[contenthash].css"
    })],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,// 3. Extranc css into files
                    "css-loader",  // 2. Turns css into commonJS
                    "sass-loader"  // 1. Turns sass into css
                ]
            },
        ]
    }
})