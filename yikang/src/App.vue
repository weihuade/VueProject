<template>
	<div>
		<router-view/>
		<!--插件使用-->
		<mt-tabbar v-model="selected"  fixed>
			<!--因为我们所点击的标签不是实际存在的所以当没有给click事件加上native的时候点击是没有效果的。-->
			<mt-tab-item :id="tab.name" v-for="tab in tabs" :key="tab.name" @click.native="goto(tab.path)">
				<myicons :type="tab.icon" /> {{tab.text}}
			</mt-tab-item>
		</mt-tabbar>
	</div>
</template>

<script>
	import Vue from 'vue';

	//引入插件
	import myicons from '@/plugins/icons';
	//	//使用插件
	Vue.use(myicons);
	//	
	//	
	//	//引入并使用Mintui
	import MintUI from 'mint-ui';
	Vue.use(MintUI)
	import "mint-ui/lib/style.css";
	//	import "./sass/common.scss"
	import axios from 'axios';
	//	
	//	//把axios写入Vue的原型对象，方便后面调用
	Vue.prototype.$axios = axios;

	export default {
		data() {
			return {
				tabs: [{
					text: '首页',
					icon: 'home',
					path: '/home',
					name: 'Home'
				}, {
					text: '分类',
					icon: 'list-unordered',
					path: '/classily',
					name: 'Classily'
				}, {
					text: '购物车',
					icon: 'paintcan',
					path: '/cart',
					name: 'Cart'
				}, {
					text: '我的',
					icon: 'person',
					path: '/mine',
					name: 'Mine'
				}],
				selected: 'Home'
			}
		},
		methods: {
			goto(path) {
				//编程式导航：利用js实现跳转
				//通过this.$router获取到路由实例对象
				//				this.$router.push({name});//等效于<router-link to="{name:xxx}">
				//				this.$router.replace({name});//用replace没有浏览记录
				this.$router.push({
					path
				})
			}
		},
		watch:{
			$route(to,from){
				this.selected = this.$route.name
			}
		}
		// beforeMount(){
		// 	console.log(this.$route)
		// }
		// created() {
			//buile出来的东西上线的项目是没有webpack环境的所要以我们要是要用跨域还是要用nodejs去实现代理了。
			//			//这里用了单引号就出现了一个问题了。
			//			this.$axios.get("/dbapi/in_theaters").then(res=>{
			////				console.log(res.data);
			//			})
		// }
	}
</script>

<style lang="scss">
	*{
		margin: 0;
		padding: 0;
	}
	.current {
		color: #58BC58;
		font-weight: 600;
	}
	
	.mint-tabbar {
		.is-selected {
			color: #58bc58;
			svg {
				color: #58bc58;
				fill: #58bc58
			}
			.mint-tab-item-label {
				color: #58bc58
			}
		}
	}
</style>