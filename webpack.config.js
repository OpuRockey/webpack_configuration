const HtmlWebPackPlugin = require ('html-webpack-plugin');
const MiniCssExtractPlugin = require ('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'main.js',
        publicPath:'/dist'
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            minimize : true
                        }
                    }
                    ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    "file-loader",
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ]
            },
        ]
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebPackPlugin({
            template: "./src/index.php",
            filename: "./index.php"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename :"[id].css"
        }),
        new CopyPlugin([
            { from: 'src/index.php', to: 'root' }
        ])
    ]
};