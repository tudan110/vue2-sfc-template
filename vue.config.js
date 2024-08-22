module.exports = {
    css: { // 是否将组件中的 CSS 提取至一个独立的 CSS 文件中 (而不是动态注入到 JavaScript 中的 inline 代码)。
        extract: false, // 生产环境下是 true，开发环境下是 false
    },
    // 扩展 webpack 配置，使 packages 加入编译
    // chainWebpack 是一个函数，会接收一个基于 webpack-chain 的 ChainableConfig 实例。允许对内部的 webpack 配置进行更细粒度的修改
    chainWebpack: config => {
        config.module
            .rule('js')
            .include
            .add(__dirname + 'packages') // 注意这里需要绝对路径，所以要拼接__dirname
            .end()
            .use('babel')
            .loader('babel-loader')
            .tap(options => {
                // 修改它的选项...
                return options
            })
    }
}
