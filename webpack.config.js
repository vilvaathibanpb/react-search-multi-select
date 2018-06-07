var path = require('path');
 
module.exports = {
    mode: 'production',
    entry: './src/MultiSearchSelect.js',
    output: {
        path: path.resolve('lib'),
        filename: 'MultiSearchSelect.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            },
            {
                test: /\.css?$/,
                exclude: /(node_modules)/,
                use:['style-loader','css-loader']
            }
        ]
    }
}