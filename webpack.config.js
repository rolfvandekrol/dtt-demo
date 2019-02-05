const webpack = require("webpack");
const path = require('path');

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, '/web/themes/demo/js/app.tsx'),
    output: {
        filename: 'app.js',
        path: path.join(__dirname, '/web/themes/demo/dist')
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: ['babel-loader', 'ts-loader'],
                exclude: [
                    /node_modules/,
                    /vendor/
                ],
            },
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    plugins: [
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /nl\./),
    ]
};