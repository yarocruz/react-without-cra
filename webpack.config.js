const path = require('path');

module.exports = {
    mode: 'development',
    entry: [
      'react-hot-loader/patch',
      './src/index.js'
    ],
    output: {
        path: path.join(__dirname, 'dist', 'assets'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    resolve: {
        extensions: [
            '.js',
            '.jsx'
        ],
        alias: {
            'react-dom': '@hot-loader/react-dom'
        }
    },
    devtool: '#source-map',
    devServer: {
        contentBase: './dist',
    }
}
