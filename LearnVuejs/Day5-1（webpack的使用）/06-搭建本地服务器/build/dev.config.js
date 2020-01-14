// 我们开发时依赖只需要这个
// 我们要合并的话要用到这个东西，所以这里得引用刚刚安装的webpack-merge
const WebpackMerge=require('webpack-merge')
// 拿到我们的baseConfig
const baseConfig=require('./base.config')

module.exports=WebpackMerge(baseConfig,{
      devServer:{
        contentBase:'./dist',
        inline:true
      }
    }
)