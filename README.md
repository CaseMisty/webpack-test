# 使用webpack初始化一个项目
安装loader
`npm install css-loader style-loader --save-dev`

`webpack hello.js hello.bundle.js --module-bind css=style-loader!css-loader --watch`  
可选参数：`--progress --display-modules --display-reasons`

建立一个项目
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