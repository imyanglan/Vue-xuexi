<template>
  <div id="app">
    <!-- 在这里写两个标签用于两个组件之间的切换
    router-link是VueRouter立马自动注册过的这个组件它是全局组件所以可以在任意的位置用 -->
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <!-- 这里我们还需要一个组件用来渲染我们要展示的组件是放在什么位置的 相当于占位
     当我们选择什么路径时更具路径的改变，它会将组件的内容替换到router-view的位置上-->
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
}
</script>

<style>

</style>
