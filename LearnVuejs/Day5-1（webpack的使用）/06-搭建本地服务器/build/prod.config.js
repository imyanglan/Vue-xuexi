// 而生产的配置文件就只需要这个
const UglifyjsWebpackPlugin=require('uglifyjs-webpack-plugin')
// 我们要合并的话要用到这个东西，所以这里得引用刚刚安装的webpack-merge
const WebpackMerge=require('webpack-merge')
// 拿到我们的baseConfig
const baseConfig=require('./base.config')


// 然后我们在导出的时候拿到我们的WebpackMerge一起导出
module.exports=WebpackMerge(baseConfig,{
  plugins:[
    new UglifyjsWebpackPlugin()
  ]
})
// 到时WebpackMerge就会将baseConfig和括号里的内容进行合并，然后我们将合并的结果进行导出