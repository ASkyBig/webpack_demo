const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'built.js',
        path: resolve(__dirname, 'build')
    },
    // loader 配置
    module: {
        rules: [
            {
                // 匹配css文件
                test: /\.css$/,
                // 使用哪些loader
                // 执行顺序：从后往前
                use: [
                    // 创建一个style标签，将js中的css样式资源插入其中，并添加到head中
                    'style-loader',
                    // 将css文件变成commonJs模块加载到js中，里面内容是样式的字符串
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    // 将less文件变成css文件，需要下载less和less-loader
                    'less-loader'
                ]
            }
        ]
    },
    // 插件配置
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    mode: 'development' // development or production
}