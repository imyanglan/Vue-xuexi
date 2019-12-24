// 小明在开发的时候想通过模块化的方式去开发的话，他可能会这样做
var name='小明'
var age=18
var flag=true

function sum(num1,num2){
  return num1+num2
}

if (flag){
  console.log(sum(10, 20));
}
// 我们每一个模块，每一个js都是一个独立的空间
// 我们现在如果想要把变量导出该怎么做?
// 这些变量都在自己的作用域里 如果别的地方想引用的话 想访问的话 就用export给它导出
// 我们就需要在这里导出
// 1.导出方式一：
export {
  flag,sum
// 我们通过export给它导出
}
// 只要有通过导出暴露这个变量任何人都能通过导出的方式获取这里面的变量和方法
// 2.导出方式二：
// 定义变量的时候就直接给它导出了
export var num1=1000;
export var num2=500;

// 3.导出函数
export function mul(num1,num2) {
  
}
// 也是俩种方式   上面的sum就是另一种方式导出函数  用对象的方式
// 4.这是导出ES6里面的类
export  class  Person {
  run(){
    console.log('在奔跑');
  }
}

// 5.export default
// const address='北京市'
// export {
//   address
// }   可以这样写
// 也可以这样写   但是我们导入的时候必须得用这个变量名  如果我们后面导入的时候想简写或者
// 改一下这个变量名要怎么做才能引用？
// export const address='北京市'
// 我们就直接先把这个东西先定义出来  我们把这个address通过default导出  default导出的东西可以不命名
const address='北京市'
export default address
// 而我们default导出的东西只有一个 多了会乱的就找不了默认的是哪个了

