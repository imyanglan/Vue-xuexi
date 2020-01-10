//在这里导入
// 1.使用commonJS的模块化规范
const {add,mul}=require('./js/mathUtils');
console.log(add(20, 30));
console.log(mul(20, 30));
// 现在就是以模块化的想法用我们的代码


// 2.使用ES6的模块化规范
// 我们来看看这样调用，通过webpack能不能使用
import {name,age,height} from "./js/info";
// 它会自动跳出后面的代码 而且在这里面我们不用写.js webpack它会自动帮我们找到这个文件，
// 在前面前端模块化调用的时候我们需要加上.js浏览器才会解析

console.log(name);
console.log(age);
console.log(height);

// 这里我们写完之后还需要重新再打包一次

// 3.依赖css文件      把它也当成一个模块 通过require去加载这个模块
require('./css/normal.css')
// 这里我们也不需要写变量，我们在上面写变量的原因是之后要用到，而样式我们只需要依赖就行了
// 如果我们直接打包的话，会报错，因为webpack不能直接对css文件进行解析，我们需要通过合适的loader
// 对该文件进行处理  我们去到官网里可以直接看如何使用合适的loader

// 4.依赖less文件
require('./css/special.less')
document.writeln('<h2>你好啊，less</h2>')
// 动态写入html


// 5.使用Vue进行开发
import Vue from 'vue'
//重新在这里调用我们的vue文件
import App from './vue/App.vue'
// 这里我们还要配置对应的loader，不然会报错因为它不知道怎样解析这个文件



// 将关于APP这个组件的代码都封装在一个文件里然后导入它就可以了
// import App from './vue/APP'

//我们创建一个叫APP的一个组件  之后对应的是一个对象 我们在里面定义一个template对象
// 然后把下面的template拿到这里面来  我们就把下面template的东西抽到这里面来了
// 我们可以将所有这些东西都抽到这个组件里面
// const App={
//   template:`
//   <div>
//     <h2>{{message}}</h2>
//     <button @click="btnClick">按钮</button>
//     <p>{{name}}</p>
//   </div>
//   `,
//   data(){
//     return{
//       message:'Hello World',
//       name:'imyanglan'
//     }
//   },
//   // 包括按钮的点击事件
//   methods:{
//     btnClick(){
//
//     }
//   }
// }
// 使用之前我们得先依赖
new Vue({
  el:'#app',
  // 一旦我们在这里同时定义了le和template  到时候这个template里所有的东西 Vue内部在编译的时候
  // 会复制到我们index.html页面中el绑定#app的那个div那边 将它替换掉
  template:'<App/>',//注册完了之后我们就在这里使用就行了，这就像是引用我们注册的子组件
  // 而我们在这里需要做的就是将组件注册
  components:{
    App
  }
})
