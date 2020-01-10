<!--模板相关的放这里-->
<template>
  <div>
    <h2>{{message}}</h2>
    <button @click="btnClick">按钮</button>
    <p>{{name}}</p>
    <Cpn></Cpn>
  </div>
</template>

<!--脚本相关的放这里-->
<script>
  // 引用我们新创建的Cpn组件
  import Cpn from './Cpn'
  // 注意：这里的.vue不能简写，不然会报错，
  // 这里如何让vue简写不报错 这需要到webpack.config.js里配置
  export default {
    name:"App",
    // 在这里对这个组件进行注册
    components:{
      Cpn
      // 这样就有了依赖关系，也是组件间的套用
    },
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