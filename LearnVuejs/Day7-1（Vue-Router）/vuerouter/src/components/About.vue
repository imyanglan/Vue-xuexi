<template>
  <div>
    <h2>我是关于</h2>
    <p>我是关于内容</p>
  </div>
</template>

<script>
export default {
  name: "About",
  // created(){
  //   document.title='关于'
  // }
  created() {
    //  组件创建完之后
    console.log("About created");
  },
  destroyed() {
    // 组件销毁之后
    console.log("About destroyed");
  },
};
</script>

<style scoped>
</style>
