import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Home from '@/components/Home';
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
    
    {
//  	name:'Homemore',
    	path:'/homemore',
    	component:Homemore,
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
  ]
})
