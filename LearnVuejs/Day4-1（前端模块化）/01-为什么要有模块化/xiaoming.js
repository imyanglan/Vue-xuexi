//第一种方式
//
// // 小明在开发的时候可能用到一些东西
// // 他定义了一些变量
// var name='小明'
// var age=22
// // 他还定义了一些函数
// function sum(num1,num2){
//   return num1+num2
// }
// // 他有定义了一个flag变量
// var flag=true
// // 然后小明还做了一个判断
// if(flag){
//   // 如果flag为true的时候就调用这个函数
//   console.log(sum(10, 20));
//
//   // 最终我们回到index页面运行的话就能看到运行结果 结果是没有问题的
//   // 但是这个时候可能小红也在做开发


// 第二种方式
// 在自己的作用域里定义自己的变量  这样就不会与其他的冲突  但是会出现另一个问题
// ;//这里加个分号是因为多个文件在引入的时候别有什么干扰
// (function () {
//
//   var name='小明'
//   var age=22
//   function sum(num1,num2){
//     return num1+num2
//   }
//   var flag=true
//   if(flag){
//     console.log(sum(10, 20));
//   }
// })()

// 但是这样会有另一个问题  就是代码的复用性  在小明创建的第二个文件里需要引用的话就引用不到
//这里面的flag变量了 也就是别的js引用不了这里面定义的任何变量或者函数了 虽然解决了变量同名的
// 问题但带来了另一个问题 就是代码不可复用了




//第三种 使用模块化的方式


;//这里加个分号是因为多个文件在引入的时候别有什么干扰
// 接收return出来的obj  这个就保存了小明想保存的东西了  然后我们去到要调用的地方
var moduleA=(function () {
  // 这里面是一个函数的独立空间  外面不能访问该怎么办呢？
  // 我们要在这里面弄一个东西 给一个导出的对象
  var obj={}

  var name='小明'
  var age=22
  function sum(num1,num2){
    return num1+num2
  }
  var flag=true
  if(flag){
    console.log(sum(10, 20));
  }

  // 想要导出的东西  我们就往obj里动态加一个想要导出的属性
  obj.flag=flag;
  obj.sum=sum;
  // 这样我们的obj里就有两个属性了
  // 然后我们现在把这个东西return出去
  return obj
  // 我们return出去还要有东西来接收它
})()

