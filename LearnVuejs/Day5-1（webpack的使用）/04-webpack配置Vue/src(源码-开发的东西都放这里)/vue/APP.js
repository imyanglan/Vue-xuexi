export default {
  template:`
  <div>
    <h2>{{message}}</h2>
    <button @click="btnClick">按钮</button>
    <p>{{name}}</p>
  </div>
  `,
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