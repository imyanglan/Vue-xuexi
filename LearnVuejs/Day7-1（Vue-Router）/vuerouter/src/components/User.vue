<template>
  <div>
    <h2>我是用户</h2>
    <p>用户界面</p>

    <!--  如果我们想获取到传到这个页面的userId  要怎样获取？-->
    <h2>{{ userId }}</h2>
    <!--也可以直接在这里面查-->
    <H2>{{ $route.params.userId }}</H2>
    <button @click="btnClick">按钮</button>
  </div>
</template>

<script>
export default {
  name: "User",
  // 如果想获取的时候这里先建立一个计算属性
  computed: {
    userId() {
      // $route就是当前哪一个路由处于活跃状态（当前使用的哪一个路由）就是拿的哪一个路由
      //       params=> parameters：参数的意思  是这个单词的缩写
      return this.$route.params.userId;
      // 通过这种方式拿到传过来的用户ID
    },
  },
  methods: {
    btnClick() {
      console.log(this.$router);
      console.log(this.$route);
      // this.test();
      // console.log(this.name);
    },
  },
  //  created(){
  //   document.title='用户'
  // }
  created() {
    //  组件创建完之后
    console.log("User created");
  },
  destroyed() {
    // 组件销毁之后
    console.log("User destroyed");
  },
};
</script>

<style scoped>
</style>
