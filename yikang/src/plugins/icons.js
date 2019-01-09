/*
 vue插件的编写
 	对象
 		install方法
 		
 	函数	
 */

	//对象
//	let myPlugin={
//		install(){
//			
//		}
//	}



//函数
//let myPlugin=(vue)=>{
//	//插件都有哪些类型
//	 
//}
import octicons from 'octicons';   //引入小图片插件。
export default {
	install(Vue,options){
		//创建全局组件、
		Vue.component('myicons',{
			props:{
				type:{
					type:String,
					required:true
				}
			},
			computed:{
			svg(){
				return octicons[this.type].toSVG()
				}	
			},
			template:`<div v-html="svg"></div>`
		})

	}
}