const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = {
    mode: "development",
    entry: "./widget/src/entrypoint.tsx",
    output: {
        path: path.resolve(__dirname, "../../dist"),
        filename: "[name].bundle.[contenthash].js",
        clean: true,
    },
    devServer: {
        static: path.join(__dirname, '../../dist'),
        port: 3000,
        open: {
            app: {
              name: 'chrome',
            },
        },
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
                test: /\.scss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
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