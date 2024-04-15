const path = require("path");

const loaders = require("./webpack.loaders.config");
const plugins = require("./webpack.plugin.config");
const rootDirectory = process.cwd();

const config = merge(loaders, plugins, {
    mode: "development",
    entry: "./src/entrypoint.tsx",
    output: {
        path: path.resolve(rootDirectory, "dist"),
        filename: "bundle.js"
    }
});

module.exports = config;