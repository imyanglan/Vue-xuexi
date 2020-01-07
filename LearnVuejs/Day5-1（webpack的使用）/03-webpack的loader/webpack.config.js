


const path=require('path')

module.exports={
  entry:'./src(源码-开发的东西都放这里)/main.js',
  output:{
    path:path.resolve(__dirname,'dist（distribution-发布-打包的东西都放这里）'),
    filename:'bundle.js',
    publicPath:'./dist（distribution-发布-打包的东西都放这里）/' //只要加上这个，
    // 以后任何涉及到url的东西它会自动在前面加上dist/这个地址
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
      },
      {//从官网复制过来
        test: /\.less$/,
        // 这下面也可以按照数组的方式写  如上
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "less-loader" // compiles Less to CSS  顺序也很重要不要弄错
        }]
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 当加载的图片，小于limit时，会将图片编译成base64字符串形式。
              //当webpack在帮助我们加载图片的时候它会在这里看一下我们的图到底是大于limit
              // 还是小于limit 如果是小于limit它会直接用url对它进行加载 并且将它编译成
              // base64的形式  而如果你是大于limit的话 它会使用另外一个的东西
              // 就是file-loader来对我们的图片进行加载
              //而base64不需要单独的文件来存储 因为它是base64的字符串所以不需要单独的文件来处理
              // 但是如果你要将图片作为图片来加载的话 这个图片就要进行打包 那这张图片就要打包到
              // 我们dist文件夹里 到时候发布的时候这些图片连同里面的bundle.js一起进行发布
              limit: 14000,
              name:'img/[name].[hash:8].[ext]'
            }
            // 这个name就是用于我们的图片进行命名的
            // 如果我们要给它原来的名字的话我们要加中括号[]里面再写个name 这是它固定的语法
            // 这样才会取那个图片原来的名字，如果不加括号只写个name它就是个固定值
            // 出来的图片就是name.jpg  就是个写死的名字 变量要使用中括号
            // 这里的.就是将这些东西连接起来的
            // hash:8 是为了防止图片同名 ext就是扩展名

          }
        ]}
    ]
  }
  // 将这几行代码从文档中复制过来就行了

}
