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
        // filename: 'js/[name]-[hash].js',
        // path: __dirname + '/dist/js'
        path: __dirname + '/dist',
        filename: 'js/[name].js'
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index-[hash].html',
            template: 'index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true
            }
        })
    ]
};