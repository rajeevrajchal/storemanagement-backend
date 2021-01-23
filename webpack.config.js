const path = require('path');
const nodeExternals = require("webpack-node-externals");

const {
    NODE_ENV,
} = process.env;

const server = {
    entry: "./src/utils/www.ts",
    mode: NODE_ENV,
    target: 'node',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'server.js'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    'ts-loader',
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    externals: [nodeExternals()]
}
module.exports = [server];
