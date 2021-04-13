import Vue from 'vue'
import App from './App'
// 在这里导入router
import router from "./router"
// 如果这后面的router是一个文件夹，那它会自动找到该目录下面的index给你导入，所以后面可以不跟index这个路径
 Vue.config.productionTip = false

new Vue({
    el: '#app',
    // 然后直接在这里导入就行了
    router,
    render: h => h(App)
})


