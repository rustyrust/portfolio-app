const path = require("path");
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const loaders = require("./webpack.loader.config");
const plugins = require("./webpack.plugin.config");

const config = {
    mode: "development",
    entry: "./widget/src/entrypoint.tsx",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.[contenthash].js",
        clean: true,
    },
    devServer: {
        static: path.join("./", 'dist'),
        port: 3000,
        open: true,
        compress: true,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx?)$/,
                use: 'ts-loader',
                exclude: ["/node_modules/", "/**/__tests__/**"],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                // Creates `style` nodes from JS strings
                "style-loader",
                // Translates CSS into CommonJS
                "css-loader",
                // Compiles Sass to CSS
                "sass-loader",
                ],
            }
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                title: 'Portfolio App',
                template: 'widget/public/index.html'
            }
        )
    ],
};

module.exports = config;