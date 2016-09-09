var path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: ['webpack/hot/dev-server', path.resolve(__dirname, './index.jsx')],
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: 'dist/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015','react']
                }
            }, {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }, {
                test: /\.css$/,
                loader: 'style!css-loader?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!autoprefixer-loader' 
            }, {
                test: /\.less$/,
                loader: 'style!css!less'
            },{ 
                test: /\.(png|jpg)$/, 
                loader: 'url?limit=25000' 
            }
        ]
    }
};      