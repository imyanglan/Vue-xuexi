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
      return this.books.reduce(function (preValue,book) {
        return preValue+book.price*book.count
      },0)

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



//
// // 而说这个例子是为了引出高阶函数
// // filter/map/reduce  这三个函数  如果学习了这三个高阶函数的话我们就可以不用
// // 以前的方法做上面的这个例子了
// // 1.filter函数的使用：判断数组每一项
// // 首先我们第一步是对这内部的数字进行过滤
// // 什么是高阶函数呢？ 我们函数可能本身所需要的一些参数它也是一个函数
// // filter中的回调函数有一个要求：必须返回一个布尔值Boolean
// // true：当返回true时，函数内部会自动将这次回调的n加入到新的数组中
// // false：当返回false时，函数内部会过滤掉这次的n
// let newNums=nums.filter(function (n) {
//   // 意思是这个函数需要一个返回值，要么你给我返回一个true要么返回一个false
//   // 当这里返回的是true的时候我们会把函数里的这个n给它加到一个新的数组里面
//   // 它会在内部创建一个新的数组，然后我们在这里只需要做一个接收就可以了
//   // 我们怎样进行过滤呢？我们只需将判断写在返回值这就行 因为这个函数只需要布尔值
//   // 而我们进行判断出来的结果就是布尔值 为true的就加入到数组中false的就直接过滤掉了
//   // 所以我们在上面使用的if判断直接写在这里即可 这样既做到了将数据全部遍历也做到了判断
//   return n<100
// })
// console.log(newNums);
//
// // 2.map函数的使用：操作数组每一项
// let new2Nums=newNums.map(function (n) {
//   // 它也是根据数组的长度进行遍历 然后返回该参数
//   // 所以我们要做参数的值的改变的话在这里返回对n的操作就行了
//   return n * 2
// });
// // 如果你想对数组里面的数都进行某种变化的话可以用这个函数
// console.log(new2Nums);
//
// // 3.reduce函数的使用
// // reduce对数组中所有的内容进行汇总的
// // 这里面最少传两个值 function (preValue,n) {
// //
// // }  这是参数一 因为参数一比较特殊它本身就是一个函数
// // 0  这是参数二
// // preValue这个值是上一次返回的值
// let total= new2Nums.reduce(function (preValue,n) {
//   // 这个函数会遍历几次？ 数组里有几个参数它就遍历几遍
//   // 而第一次遍历的话preValue是多少呢？ 为0 因为它的初始化值就是0，就是第二个参数写的那个
//   // 而第二次遍历的话preValue的值就会是上次return的结果 上次函数的返回值
//   // 所以我们要将这数组进行汇总的话很简单 因为每次给preValue都是返回值
//   // 所以如果真的需要累加的话，只需把preValue+=n 而我们preValue直接会返回累加后的值
//   // 再进入下一次遍历所以只需返回preValue+n就等于preValue=preValue+n等于preValue+=n
//   // 这个算式了
//   return preValue+n
// },0)//这个叫做初始化值，一般这里会传个0
// console.log(total);
//
// // 如果我们使用高阶函数就不用像上面那样使用for循环了


// // 如果我们会使用高阶函数
// // 我们直接要把上面所要求的结果计算出来 只需要通过几行代码写出来
// let total=nums.filter(function (n) {
//   return n<100
// }).map(function (n) {
//   return n*2
// }).reduce(function (preValue,n) {
//   return preValue+n
// },0)
// console.log(total);
// // 这就是我们的函数式编程



// // 然后以上这种写法还有一种更简洁的方式，箭头函数  只需要一行代码就能解决
// let  total=nums.filter(n=>n<100).map(n=>n*2).reduce((pre,n)=>pre+n);
// console.log(total);