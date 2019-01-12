<template>
<div class="page">
	<mt-navbar v-model="selected">
		<mt-tab-item :id="tab.name" v-for="tab in tabs" :key="tab.name" @click.native="goto(tab.name)">{{tab.title}}</mt-tab-item>
	</mt-navbar>
	<router-view/>
	</div>
</template>

<script type="text/javascript">
	export default{
		data(){
			return{
				selected:'seckill',
				tabs:[
				{
    					title:'每日秒杀',
    					name:'seckill'
    				},{
    					title:'明日预告',
    					name:'advance',
    				}
				]
			}
		},
		methods:{
			goto(name){
				this.$router.push({path:'/homemore/'+name})
			},
		}
	}
</script>
<style lang="scss">
	
</style>