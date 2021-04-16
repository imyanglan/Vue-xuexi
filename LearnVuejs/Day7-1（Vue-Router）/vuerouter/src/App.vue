<template>
  <div id="app">
    <!-- 在这里写两个标签用于两个组件之间的切换
    router-link是VueRouter立马自动注册过的这个组件它是全局组件所以可以在任意的位置用 -->
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <!-- 这里我们还需要一个组件用来渲染我们要展示的组件是放在什么位置的 相当于占位
     当我们选择什么路径时更具路径的改变，它会将组件的内容替换到router-view的位置上-->
    <router-link :to="'/user/'+userId">用户</router-link>
    <!-- <router-link to="/profile">档案</router-link>  如果想额外的传递一些
    东西的话 不能在这里传递字符串而必须是一个对象 传递对象时必须得加绑定:不然它不知道这个要作为对象去读取
    传递更多数据就是在query里传-->
    <router-link :to="{path:'/profile',query:{name:'imyanglan',age:'18',}}">档案</router-link>
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
  data(){
    return{
      userId:'imyanglan',
    }
  }
}
</script>
<style>

</style>
