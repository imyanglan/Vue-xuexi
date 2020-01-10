<!--接下来我们就可按照这样组件化的方式进行开发了-->
<template>
  <div>
    <h2>我是cpn组件的标题</h2>
    <p>我们cpn组件的内容</p>
    <span>--{{name}}</span>
  </div>
</template>

<script>
  export default {
    name: "Cpn",
    data(){
      return{
        name:'imyanglan'
      }
    }
  }
</script>

<style scoped>
  h2 {
    color: red;
  }
  p {
    color: green;
  }
</style>
<!--这样写完之后我们怎样才能让这两个组件之间产生关联呢？
只要把这个组件引用到我们的App组件里使它们产生依赖关系-->