const path = require('path')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.(s*)css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader',
                {
                    loader: "sass-loader",
                    options: {
                      implementation: require("node-sass"),
                    },
                }
            ]
        }]
    }
};