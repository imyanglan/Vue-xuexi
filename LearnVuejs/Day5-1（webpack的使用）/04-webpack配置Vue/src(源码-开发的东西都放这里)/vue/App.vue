<!--模板相关的放这里-->
<template>
  <div>
    <h2>{{message}}</h2>
    <button @click="btnClick">按钮</button>
    <p>{{name}}</p>
  </div>
</template>

<!--脚本相关的放这里-->
<script>
  export default {
    name:"App",
    data(){
      return{
        message:'Hello World',
        name:'imyanglan'
      }
    },
    // 包括按钮的点击事件
    methods:{
      btnClick(){

      }
    }
  }
</script>
<!--这里还能放样式-->
<style scoped>

</style>