//配置路由相关的信息

//既然要使用路由第一步我们得先导入路由，从我们之间安装的路由里面导入
import VueRouter from 'vue-router'
//VueRouter这个就是我们安装的框架vue-router里面的一个对象，因为它里面导出了VueRouter所以这里可以导入
// 导入完这个东西就可以在下面使用了    怎样导入？分为三个步骤
// 1.通过Vue.use(里面传一个插件)，来安装这个插件  不管以后使用什么vue的插件，只要它是一个插件就必须
// 通过Vue.use来安装这个插件
// 而VueRouter它就是一个插件，所以为了能用这个插件，就必须在使用Vue.use将它安装
// 但是我们现在这里还没有Vue，所以还要再导入一个Vue才能调用这个方法
import Vue from 'vue'
// 然后拿到这个Vue,.use里面要传一些什么？plugin（插件）


// 导入组件
//这是之前的方式，如果我们要使用到路由懒加载
// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'

const Home = ()=>import('../components/Home')

// 对子路由进行懒加载
const HomeNews=()=>import('../components/HomeNews')
const HomeMessage=()=>import('../components/HomeMessage')
//对子路由进行懒加载

const About = ()=>import('../components/About')
const User = ()=>import('../components/User')
const Profile=()=>import('../components/Profile')

Vue.use(VueRouter)

// 2.创建路由对象  因为需要用这个东西所以需要创建这个路由对象我们就new一个对象

// ②将routes数组抽离出来
const  routes=[

  // 为了让网站默认显示首页 需要在这里再配置一个映射关系
  {
    path:'',
    // 这里我们给这个路径一个重定向     redirect:重定向
    redirect:'/home',
    // 这样当路径为上面的情况时就让这个路径定向到首页的路径 就完成了默认显示首页
  },
// 之后需要在这里配置映射关系
// 让一个URL对应一个组件，配置他们之间的映射关系
//   一个映射关系就是一个对象
  {
    // 这里不是写URL URL是完整的地址
    // 包括  协议头://主机名还有一些其他东西    而这里的path只有一个相对的路径
    // 映射关系里有两个东西
  path:'/home',
  meta:{
    title:'首页'
  },
  // 添加源数据，在里面添加title属性
    // 这里配置个/home就是表示如果出现这个路径的话出现下面这个组件
    // 所以我们要把刚刚创建的组件导入到这里面调用
  component:Home,
    // 嵌套路由 因为都是嵌套在某个路由下，所以需要包含在某个路由组件里面，在外面创建就是同级关系了
// 在这里加上一个属性children 也是数组类型，这样就可以放多个参数对象
    children:[
      {
        path:'',
        redirect:'news'//嵌套默认路径
        
      },
      {
        path:'news', //如果是我们子路由的时候这里前面就不需要加/   它会自动拼接上我们写的这个news
        component:HomeNews
      },
      {
        path:'message',
        component:HomeMessage
      }
    ]

  },
  {
    path:'/about',
    meta:{
      title:'关于'
    },
    component:About
  },
// 这里只有在后面拼接上对应的userId才能跳转到这个组件
// 需要在前面跳转时拼接上对应的东西
  {
    path:'/user/:userId',
    meta:{
      title:'用户'
    },
    component:User
  },
  {
    path:'/profile',
    meta:{
      title:'档案'
    },
    component:Profile,
  }


]
const router=new VueRouter({
  //这里 new 一个对象和new Vue是一样的 newVueRouter也需要在里面传一些东西
  // 传一个很重要的属性
  // routes:配置路由和组件之间的映射关系
  // ① routes:[]  但因为这样做的话嵌套就有点多，我们可以将这个数组定义在外边，直接在这里调用就行了
  routes,
//因为默认的模式为hash模式
// 我们只需在这里传入是再传入一个mode属性改成history就会换成HTML5的模式
  mode:'history',
  // 如果要统一改元素router-link-active的默认名称，在这里添加一个属性进行设置
  linkActiveClass:'active'
})
// 这里的router对象就是上面建立的router对象 
// 这个router对象它有一个叫beforeEach的函数 得知它需要传递进去的参数
// 为函数而那个函数还需要三个参数 直接写成一个箭头函数传递过去如下
router.beforeEach((to,form,next)=>{
 // 永远取第一个，当你只有一个路由的时候它取到的也是当前的这个
  document.title=to.matched[0].meta.title;
  // 要重新实现这个函数在这里面必须调next 不调next它路由就不能进行跳转了
  next()
});



// 3.将router对象传入到Vue实例中
// 为了让Vue实例能拿到这个VueRouter我们得将它导出
export default router
//导出   然后去到main里导入
