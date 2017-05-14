/**
 * Created by 子傲 on 2017/5/14.
 */
var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        main: './src/script/main.js',
        a: './src/script/a.js'
    },
    output: {
        // path: __dirname + '/dist/js',
        path: __dirname + '/dist',
        filename: 'js/[name]-[hash].js'
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index-[hash].html',
            template: 'index.html'
        })
    ]
};