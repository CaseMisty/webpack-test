# 使用webpack
安装loader
`npm install css-loader style-loader --save-dev`

`webpack hello.js hello.bundle.js --module-bind css=style-loader!css-loader --watch`  
可选参数：`--progress --display-modules --display-reasons`

## 建立项目的webpack配置
```
mkdir webpack-demo
cd webpack-demo
npm init
npm install webpack --save-dev
```
根目录新建:
1. index.html: script的scr为bundle.jS
2. webpack.config.js：这是webpack的默认配置文件，当根目录下有此文件时，命令行中输入webpack默认按此配置
```
module.exports = {
    entry: './src/script/main.js',
    //要么只这一行绝对路径filename
    //要么像下面分两行配置项
    output: {
        // filename: './dist/bundle.js',
        path: __dirname + '/dist/js',
        filename: 'bundle.js'
    }
}
```
3. src文件夹：其内新建script、style文件夹，script文件夹中新建main.js
4. dist文件夹

这样，在命令行中直接输入`webpack`，就打包好了。
如果想只输入webpack还带上更多的可选参数，可以配合npm的配置文件：
打开package.json，在`scripts`属性对应的值中添加
```json
"webpack": "webpack --config webpack.config.js --progress --display-modules --colors --display-reasons --watch"
```
在命令行中`npm run webpack`执行。

修改后的webpack.config.js:
```javascript
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
```
filename的格式可以为[name]-[chunkhash].js，具体看[Output--webpack](https://doc.webpack-china.org/configuration/output/#output-filename)

## 自动化生成项目中的html页面
上面这种方法生成的文件名后半段是随机的，每次绑定文件名都会改，`npm install html-webpack-plugin --save-dev`。安装好后，于webpack.config.js第一行添一句`var htmlWebpackPlugin = require('html-webpack-plugin');`，在exports中加一项plugin属性：
```
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index-[hash].html',
            template: 'index.html'
        })
    ]
```

output中添加`publicPath: 'http://***.com'`，使生成的html文件js的src前都加上对应路径。
plugins中添加`minify: {removeComments: true, collapseWhitespace: true}`使生成的html文件压缩并删除注释。