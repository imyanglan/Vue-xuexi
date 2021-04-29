import Vue from 'vue'
import App from './App'
// 在这里导入router
import router from "./router"
// 如果这后面的router是一个文件夹，那它会自动找到该目录下面的index给你导入，所以后面可以不跟index这个路径
//  Vue.config.productionTip = false

//  Vue.prototype.test=function(){
//      console.log('test');
//  }

 Vue.prototype.name="imyanglan"

new Vue({
    el: '#app',
    // 然后直接在这里导入就行了
    router,
    render: h => h(App)
})
// 这里的router就是从上面导入的router到该文件中找到这个文件，里面new的router就是这里的router
console.log(router);

// // 假如说我现在有一个我们的对象 我们想往里面添加内容属性的话 以前可能会像下面这样做
// const obj={
//     name:'why'
// }
// // 但是也可以用这个方法 define 定义 Property 属性 格式如下
// //                  (给谁定义,键，值)
// Object.defineProperty(obj,'age',18);