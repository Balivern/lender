const path = require('path');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
    plugins: [
        new NodePolyfillPlugin()
    ],
    resolve: {
        fallback: {
            "fs": false,
            "net": false,
            "async_hooks": false,
            "tls": false
        },
    },
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/',
    },
    mode: 'development',
    devServer: {
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'images/',
                        },
                    },
                ],
            },
        ]
    },
};
