const webpack = require("webpack");

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/build',
        filename: 'IconToolTip.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
           
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ]
};