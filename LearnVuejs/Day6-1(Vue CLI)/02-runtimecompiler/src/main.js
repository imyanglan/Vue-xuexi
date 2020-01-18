import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// //2.创建组件对象
// const cpn={
//   template:`<div>{{message}}</div>`,
//   data(){
//     return{
//       message:'我是组件message'
//     }
//   }
// }

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // components: { App },
  // template: '<App/>'

  // 使用render函数
  // createElement有很多用法
  render:function (createElement) {
    // 1.普通用法  createElement('标签',{标签的属性},['内容'])正常的用法是需要三个参数
    // （自己创建标签）
    // 这里的第一个参数是标签 它会把你创建出来的标签替换掉 我们上面挂载的app
    // 第二个参数是一个对象
    // 第三个参数是一个数组 数组里面可以跟上我们标签里面到时候的内容
    // return createElement('h2',
    //   {class:'box'},
    //   ['Hello World',createElement('button',['按钮'])])

    // 2.传入组件对象   把上面创建的组件对象传入我们的这个函数里面
    // return createElement(cpn)
    // 在这个步骤里面就不需要像以前那样要通过template去编译了
    // 所以这里如果要调用我们的App组件直接将cpn替换成App就行了
    return createElement(App)
  }



})
