
const path=require('path')
const webpack=require('webpack')
const HtmlWebpackPlugin=require('html-webpack-plugin')
module.exports={
  entry:'./src(源码-开发的东西都放这里)/main.js',
  output:{
    path:path.resolve(__dirname,'../dist（distribution-发布-打包的东西都放这里）'),
    // 指定目录的时候，我们是拿到当前文件所在目录往后面拼接dist
    // 而我们现在base所在的目录是build，所以打包的dist文件会创建到这里面
    filename:'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]

      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "less-loader"
        }]
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 14000,
              name:'img/[name].[hash:8].[ext]'
            }
          }
        ]},

      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.vue$/,
        use:['vue-loader']
      }
    ]
  },
  resolve:{
    extensions:['.js','.vue','css'],
    alias:{
      'vue$':'vue/dist/vue.esm.js'
    }
  },

  plugins:[
    new webpack.BannerPlugin('最终版权归imyanglan所有'),
    new HtmlWebpackPlugin({
      template:'index.html'
    })
  ]

}
