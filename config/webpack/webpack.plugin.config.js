const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const plugin = [
    new HtmlWebpackPlugin(
        {
            title: 'Portfolio App',
            template: 'widget/index.html'
        }
    )
]

module.exports = plugin;