import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Home from '@/components/Home';
import Classily from '@/components/Classily';
import Search from '@/components/Search';
import Mine from '@/components/Mine';
import Reg from '@/components/Reg';
import Cart from '@/components/Cart';
export default new Router({
  routes: [
    {name:'Home',path:'/home',component:Home},
    {name:'Classily',path:'/classily',component:Classily},
    {name:'Search',path:'/search',component:Search},
    {name:'Cart',path:'/cart',component:Cart},
    {name:'Mine',path:'/mine',component:Mine},
    {name:'Reg',path:'/reg',component:Reg}
  ]
})
