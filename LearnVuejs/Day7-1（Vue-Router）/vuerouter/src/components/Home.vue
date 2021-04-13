<template>
<div>
  <h2>我是首页</h2>
  <p>我是首页内容</p>
<!--  因为子路由都是写在这个首页里的所以要在这里给子路由注册一个位置,这样就会替换掉首页里的这个
router-view了  而为了告诉子路由该在什么时候显示我们也还要创建两个router-link对应两个子组件
而我们to的时候也要注意，路径一定要写完整的，因为它不会自动帮你拼接上的
而且前面必须要加 / 要写成绝对路径 别人它就会点另一个的时候继续将home拼接上去，
这是相对路径和绝对路径的问题-->
<router-link to="/home/news">新闻</router-link>
<router-link to="/home/message">消息</router-link>
  <router-view></router-view>

</div>
</template>

<script>
  export default {
    name: "Home"
  }
</script>

<style scoped>

</style>
