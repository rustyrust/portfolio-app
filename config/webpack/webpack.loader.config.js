const loader = {
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
    }
}

module.exports = loader;