import Vue from 'vue'
import Router from 'vue-router'
//import Cube from 'cube-ui'


Vue.use(Router)
//Vue.use(Cube)
/* import Home from '@/components/Home';
import Classily from '@/components/Classily';
import Search from '@/components/Search';
import Mine from '@/components/Mine';
import Reg from '@/components/Reg';
import Cart from '@/components/Cart';
import Homemore from '@/components/Homemore';
import Seckill from '@/components/Seckill';
import Advance from '@/components/Advance';





export default new Router({
  routes: [
   	{path:'/',component:Home},
    {name:'Home',path:'/home',component:Home},
    {name:'Classily',path:'/classily',component:Classily},
    {name:'Search',path:'/search',component:Search},
    {name:'Cart',path:'/cart',component:Cart},
    {name:'Mine',path:'/mine',component:Mine},
    {name:'Reg',path:'/reg',component:Reg},
    
    { */

//按需加载,当渲染其他页面时才加载其组件,并缓存,减少首屏加载时间
const Home = resolve => require(['@/components/Home'], resolve)
const Classily = resolve => require(['@/components/Classily'], resolve)
const Mine = resolve => require(['@/components/Mine'], resolve)
const Form = resolve => require(['@/components/Form'], resolve)
const Wallet = resolve => require(['@/components/Wallet'], resolve)
const ChangePW = resolve => require(['@/components/ChangePW'], resolve)
const SetLocation = resolve => require(['@/components/SetLocation'], resolve)
const Login = resolve => require(['@/components/Login'], resolve)
const Reg = resolve => require(['@/components/Reg'], resolve)
const Cart = resolve => require(['@/components/Cart'], resolve)
const Favorite = resolve => require(['@/components/Favorite'], resolve)
const Search = resolve => require(['@/components/Search'], resolve)
const Homemore = resolve => require(['@/components/Homemore'], resolve)
const Seckill = resolve => require(['@/components/Seckill'], resolve)
const Advance = resolve => require(['@/components/Advance'], resolve)
const Homedetail = resolve => require(['@/components/Homedetail'], resolve)
const List = resolve => require(['@/components/List'], resolve)
const Detail = resolve => require(['@/components/Detail'], resolve)
// import Home from '@/components/Home';
// import Classily from '@/components/Classily';
// import Mine from '@/components/Mine';
//   import Form from '@/components/Form';
//   import Wallet from '@/components/Wallet';
//   import ChangePW from '@/components/ChangePW';
//   import SetLocation from '@/components/SetLocation';
// import Login from '@/components/Login';
// import Reg from '@/components/Reg';
// import Cart from '@/components/Cart';
// import Favorite from '@/components/Favorite';
  
const routes = [
        {
          path:'/',
          redirect:'/home',
          meta:{
            // keepAlive: true
          }
        },
        {
          name:'Home',
           path:'/home',
           component:Home,
           meta:{
            // keepAlive: true,
          }
        },
        {
          name:'Classily',
          path:'/classily',
          component:Classily,
          meta:{
            // keepAlive: true
          },
          /* children: [{
              path: '',
              redirect: {
                name: 'Classily'
              }
            },
            {
              name: 'List',
              path: 'list',
              component: List,
            },
          ] */
        },
        {
          name:'Cart',
          path:'/cart',
          component:Cart,
          meta:{
            // keepAlive: true
          }
        },
        {
          name:'Mine',
          path:'/mine',
          component:Mine,
          meta:{
            // keepAlive: true,
            requiresAuth:true
          },
        },
        {
          name:'Form',
          path:'/form',
          component:Form,
          meta:{
            // keepAlive: true
          }
        },
        {
          name:'Wallet',
          path:'/wallet',
          component:Wallet,
          meta:{
            // keepAlive: true
          }
        },
        {
          name:'ChangePW',
          path:'/changePW',
          component:ChangePW,
          meta:{
            // keepAlive: true
          }
        },
        {
          name:'SetLocation',
          path:'/setLocation',
          component:SetLocation,
          meta:{
            // keepAlive: true
          }
        },
        {
          name:'Favorite',
          path:'/favorite',
          component:Favorite,
          meta:{
            // keepAlive: true,
            requiresAuth:true
          }
        },
        {
          name:'Login',
          path:'/login',
          component:Login,
          meta:{
            // keepAlive: true
          }
        },
        {
          name:'Reg',
          path:'/reg',
          component:Reg,
          meta:{
            // keepAlive: true
          }
        },
        {
          name:'Search',
          path:'/search',
          component:Search,
          meta:{
            // keepAlive: true
          }
        },
        {
            name:'List',
            path:'/list/:code',
            component:List,
            meta:{
              // keepAlive: true
            }
        },
        {
            name:'Detail',
            path:'/detail/:pcode',
            component:Detail,
            meta:{
              // keepAlive: true
            }
        },
      {
//  	name:'Homemore',
    	path:'/homemore',
      component:Homemore,
      meta:{
        // keepAlive: false
      },
    	children:[
    		{
    		path:'',
    		redirect:{name:'Seckill'}
    	},
    	{
    		path:'seckill',
    		name:'Seckill',
    		component:Seckill
    	},{
    		path:'advance',
    		name:'Advance',
    		component:Advance
    	}
    	]
    },
      {
          name:'Homedetail',
           path:'/homedetail',
           component:Homedetail,
           meta:{
            // keepAlive: true,
          }
       }
];
const router = new Router({
  routes
});
//全局路由守卫：所有的路由切换都会执行
//在进入某个路由前执行的代码
router.beforeEach((to, from, next) => {
  //设置全局路由守卫后要进入to路由，必须调用next()方法
  if(to.meta.requiresAuth){
      //判断是否登陆
      if(sessionStorage.getItem('token')){
        next()
      }else{
        next({
          path:'/login',
          // query:{redirect:from.fullPath}
        })
        
      }
  }else{
      next();
  }
})

export default router;

// export default new Router({

// });
