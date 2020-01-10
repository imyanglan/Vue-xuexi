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
        ]},

      {
        test: /\.js$/,
        //exclude:排除
        //include:包含
        exclude: /(node_modules|bower_components)/,
        // 这里就是表示node_modules这个文件夹里的东西
        // 和bower_components这个文件夹里的东西不用转化
        use: {
          loader: 'babel-loader',
          options: {
            // 这是配置 就我们刚刚安装的时候最后那一行的配置
            // presets: ['@babel/preset-env']
            // 这里的配置我们不用官网里的默认配置而是我们刚刚装的那个
            presets: ['es2015']

          }
        }
      },
        // 增加我们的vue的配置文件
      {
        test: /\.vue$/,
        use:['vue-loader']
      }

    ]
  },
  // 将这几行代码从文档中复制过来就行了
  resolve:{
    // extensions：解决
    // 在这里加一个配置就能让.vue等这些文件进行简写调用了
    extensions:['.js','.vue','css'],
    // 在extensions后面跟个数组，以后你有什么文件想省略直接在里面写
    // 该文件的扩展名就行了
    // 这样回到我们刚刚的位置将那个vue文件后面的.vue省略

    // alias:别名
    alias:{
      'vue$':'vue/dist/vue.esm.js'
      // 它是这样指定的  这样指定是什么意思
      // 当我们在代码中做了这个操作的时候 import Vue from 'vue'
      // 它就会先来看一下这个vue有没有先指向一个具体的文件夹
      // 而我们在这里给它指向了一个具体的文件夹
      // 这个时候它就不会按照默认的方式去找我们的vue文件了
      // 然后我们指定的这个文件中就包含我们的runtime-compiler
      // 这样就选择使用了第二种方式：runtime-compiler
    }
 }

}
