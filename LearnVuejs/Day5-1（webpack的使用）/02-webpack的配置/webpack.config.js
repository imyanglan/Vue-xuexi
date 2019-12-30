// 如何告诉webpack哪些是我的入口哪些是我的出口呢？
// 通过我们conmonJS的方式来这里给我们导出一个对象

// node动态获取路径
// 首先我们得导入一个模块，这个模块叫path  而我们现在还没定义这个path 这需要到我们node对应的包
// 里找这个path  而我们现在如果想用这个path 得需要我们当前项目存在path的这个包
// 所以我们得在这个项目中装一些包
// 我们在这里准备用我们node相关的一些东西的时候 我们就赶紧在这里给它做一个初始化
// 我们就在下面的命令行里输入npm init(记住地址一定是指向该项目文件夹的)
// 一旦我们做了初始化之后的话它这里就会运行到package name: (02-webpack的配置) 这里
// 这里就是需要我们起一个包的名字的  因为这里面有些中文是不能用所以我们按回车还是不会有什么变化
// 所以我们要重新给它起一个名字package name: (02-webpack的配置) meetwebpack   这样它就有个名字了
// version: (1.0.0)   之后这下面这个是我们的版本号 我们当前项目的版本号  之后我们再按下回车
// description:  这个是描述 我们先不写了  继续回车
// entry point: (webpack.config.js)  然后这里的话是我们这个的入口  这里我们随便写
// 不用把webpack.config.js 这个东西作为入口
// 我们随便写一个 entry point: (webpack.config.js) index.js  因为我们暂时用不上它
// 然后后面的东西我们都不写 全部一路直接回车它
// test command:
//     git repository:
//     keywords:
//         author:
//             license: (ISC)
// About to write to D:\WebStorm\Vue-xuexi\LearnVuejs\Day5-1（webpack的使用）\02-webpack的配置\package.json:
//
// {
//   "name": "meetwebpack",
//     "version": "1.0.0",
//     "description": "",
//     "main": "index.js",
//     "scripts": {
//   "test": "echo \"Error: no test specified\" && exit 1"
// },
//   "author": "",
//     "license": "ISC"
// }
//
//
// Is this OK? (yes)
// 到这个位置   它就是问你直接帮你生成上面那个行不行啊   直接回车 ok
// 敲完回车之后的话它就会在我们这里生成另外一种文件  叫package.json
// 一般任何程序如果想依赖我们一些node环境的话一般情况下我们都会有一个package.json这样的文件的
// 这个文件是告诉你我们当前文件的一些信息的
// 当然一些情况下如果我们的package.json如果还依赖一些东西的话我们还会敲另外一个命令
// npm install
// 如果我们的package.json这里面有依赖一些东西  它会根据package.json里所有的依赖 然后帮助你在
// 当前文件夹里面安装一些东西的

// 所以我们一旦要在这里用到node的东西的话 先把package.json给建出来


const path=require('path')
// 因为我们这个东西就要用到node的包所以我们要通过上面的方式建一个package.json出来
// 这样我们就导出了node里面 在它全局里面有的一个path的这个包 我们把它导出赋值给path
// 然后在下面使用  而path这个东西其实是一个模块 这个模块里有一个函数叫resolve
// 我们可以通过这个函数对我们的两个路径进行拼接
module.exports={
  // 在这个对象里面  告诉它两个东西
  // 一个是entry 入口  入口这个里面我们就这样写
  entry:'./src(源码-开发的东西都放这里)/main.js',
  // 一个是output 出口  出口我们不能像入口那也写这里要求我们写的是一个对象类型
  output:{
    // 在这个对象类型里它有两个东西  它要求我们这样写
    path:path.resolve(__dirname,'dist（distribution-发布-打包的东西都放这里）'),//路径  这里要写绝对路径
    // 而我们怎样获取  这就需要通过node的语法了
    //  而且我们还要动态的获取我们的这个绝对路径
    // 我们通过resolve进行拼接   __dirname这是node上下文里自带的一个全局变量
    // 这个全局变量里面保存的就是我们当前所在的这个文件它所在的路径 所以我们要用这个东西
    // 然后我们在后面跟上一个dist（distribution-发布-打包的东西都放这里）文件夹的名称
    // 这样的话我们的路径就对了 而且还是我们的绝对路径
    // 拿到这个绝对路径 我们再去终端运行我们的webpack 就没有报错
    // 还会显示这个
    // Version: webpack 3.6.0
    // Time: 220ms
    // Asset     Size  Chunks             Chunk Names
    // bundle.js  4.13 kB       0  [emitted]  main
    // [0] ./src(源码-开发的东西都放这里)/main.js 611 bytes {0} [built]
    // [1] ./src(源码-开发的东西都放这里)/mathUtils.js 248 bytes {0} [built]
    // [2] ./src(源码-开发的东西都放这里)/info.js 149 bytes {0} [built]
    // 而且还重新打包了
    filename:'bundle.js'//文件名  bundle：打包
  },
  // 我们在这里就得告诉它们对应的入口和对应的出口  如果我们在这里告诉了入口和出口了，
  // 那么我们在下面执行webpack的时候它会自动找到webpack.config.js这个文件
  // 然后看一下这文件里有没有导出入口，有没有导入出口  它就会读取这个入口和出口
  // 这样它就知道你要从哪里作为入口哪里作为出口了
}

// 这样我们就将我们的入口和出口放在配置文件里以后要是有更新我们直接运行webpack就行了
// 不用在繁琐的在后面还要自己手动输入 入口和出口