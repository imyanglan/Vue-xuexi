


const path=require('path')

module.exports={
  entry:'./src(源码-开发的东西都放这里)/main.js',
  output:{
    path:path.resolve(__dirname,'dist（distribution-发布-打包的东西都放这里）'),
    filename:'bundle.js'
  },
  // 按照webpack中文文档中css-loader安装好之后我们要在这里进行配置
  module: {
    rules: [
      {
        test: /\.css$/,  //匹配所有的css文件
        use: [ 'style-loader', 'css-loader' ]
        // css-loader只负责将css文件进行加载  它是不负责帮你解析的 也不负责帮你把在css里
        // 写的东西放在HTML里让它生效  如果想让它生效我们得再安装一个loader
        // 就是style-loader
        // style-loader负责将样式添加到DOM中生效
        // 在webpack中它在读取多个loader的时候是从右到左读的，所以顺序一定不能放错
      }
    ]
  }
  // 将这几行代码从文档中复制过来就行了

}
