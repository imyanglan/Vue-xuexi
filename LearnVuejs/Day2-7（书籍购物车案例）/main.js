const app=new Vue({
  el:'#app',
  data:{
    books:[
      {
        id:1,
        name:'《算法导论》',
        date:'2006-9',
        price:85.00,
        count:1
      },
      {
        id:2,
        name:'《UNIX编程艺术》',
        date:'2006-2',
        price:59.00,
        count:1
      },
      {
        id:3,
        name:'《编程珠玑》',
        date:'2008-10',
        price:39.00,
        count:1
      },
      {
        id:4,
        name:'《代码大全》',
        date:'2006-3',
        price:128.00,
        count:1
      }
    ]
  },
  methods:{
    // getFinalPrice(price){
    //   return '￥'+price.toFixed(2) 定义价格格式的方法
    // }
    // 我们要找到改某一个的书里的count  我们要传入一个index 根据这个来找哪本书的count进行更改
    increment(index) {
      this.books[index].count++
    },
    decrement(index) {
        this.books[index].count--

    },
    deleteClick(index){
      this.books.splice(index,1)//把自己删掉，传个1就行了
    }


  },
  // 在这里写过滤器 filters 它是一个函数,它会把你要过滤的东西作为参数传入到这个函数中
  filters:{
    showPrice(price){
      return '￥'+price.toFixed(2)
    }
  },
  computed:{
    totalPrice(){
      // // 1.普通的for循环
      // let totalPrice=0;//这里要赋值0，不然界面上不会当做整形去计算的，显示为NaN
      // for (let i=0;i<this.books.length;i++){
      //   totalPrice += this.books[i].price * this.books[i].count
      //   // 遍历我们的books，将里面的书和价格的乘积相加就是总价格
      // }
      // return totalPrice


      // // 2.for（let i in this.boosk）
      // let totalPrice=0;
      // for (let i in this.books)
      // {
      //   totalPrice += this.books[i].price * this.books[i].count
      // }
      // return totalPrice

      // // 3.直接拿到我们的books for(let i of this.books)
      // let totalPrice=0;
      // for (let item of this.books)
      // {
      //   totalPrice += this.books.price * this.books.count
      // }

      // 4.reduce 高阶函数

    }
  }

})


// 编程范式：命令式编程/声明式编程
// 编程范式：面向对象编程（第一公民：对象）/函数式编程（第一公民：函数）


const nums=[10,20,30,40,1111,222,333,4444,555,66,77,88,999]

// // 1.需求，我希望从这个数组里取出所有小于100的数字
// // 按照我们以前的方式我们可能会这样做
// let newNumbs=[]
// for(let n of nums)
// {
//   if (n<100){
//     newNumbs.push(n)
//   }
// }
//
// // 如果还有第二个需求第二个需求 2.将所有小于100的数字进行转化：全部*2
// let new2Numbs=[]
// for (let n  in newNumbs){
//   new2Numbs.push(n*2)
// }
//
// // 还有第三个需求 3.将所有new2数组里的数相加，得到最终的计数
// let total=0
// for(let n of new2Numbs){
//   total+=n
// }
//
// console.log(total);
// 这样就得到最终的结果了
// 而说这个例子是为了引出高阶函数
// filter/map/reduce  这三个函数  如果学习了这三个高阶函数的话我们就可以不用
// 以前的方法做上面的这个例子了

// 首先我们第一步是对这内部的数字进行过滤
// 什么是高阶函数呢？ 我们函数可能本身所需要的一些参数它也是一个函数
nums.filter(function () {
  
})