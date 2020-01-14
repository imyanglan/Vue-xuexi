
// 1.使用commonJS的模块化规范
const {add,mul}=require('./js/mathUtils');
console.log(add(20, 30));
console.log(mul(20, 30));

import {name,age,height} from "./js/info";

console.log(name);
console.log(age);
console.log(height);


require('./css/normal.css')

require('./css/special.less')
document.writeln('<h2>你好啊，less</h2>')
import Vue from 'vue'
import App from './vue/App.vue'
new Vue({
  el:'#app',
  template:'<App/>',
  components:{
    App
  }
})

// 当我们用了实时更新的话，我们在这里面更改的数据不要我们刷新也会实时更新到本地的服务器上显示
// document.writeln('<button>按钮</button>')