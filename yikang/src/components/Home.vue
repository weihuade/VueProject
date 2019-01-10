<template>
  <div class="page">
  	<div class="header">
  		<div class="pic">
  			<img src="../img/homeimg/logonew.png"/>
  		</div>
	<mt-search v-model="value" cancel-text autofocus placeholder="请输入您需要购买的商品">
		<!--搜索结果显示出来的模块<mt-cell>-->
		<mt-cell>

		</mt-cell>

	</mt-search>
	<div class="login">登录</div>
	</div>
  		<!--下一模块开始的位置-->
  <mt-swipe :auto="4000">
  	<mt-swipe-item>3</mt-swipe-item>
</mt-swipe>
  </div>
</template>

<script>
export default {
		 data(){
		 		return{
		 			value:'',
		 			result:[]
		 		}
		 }
}
</script>

<style lang="scss">	
	.page{
		.header{
			    width: 100%;
			    max-width: 640px;
			    min-width: 320px;
			    margin: 0px auto;
			    height: 52.5px;
			    background: #31c27c;
			  .pic{
			  	float: left;
			  	width: 10%;
			    height: auto;
			    max-width: 53px;
			    max-height: 50px;
			    margin-left: 10px;
			    img{
			    	width: 100%;
				    margin-top: 10px;
				    max-width: 36px;
				    max-height: 36px;
			    }
			  }
			  .mint-search{
			  	background: #31c27c;
			  	width: 69%;
			  	height: 100%;
			  	height: 52.5px;
			    float: left;
			    text-align: center;
			    line-height: 52.5px;
			    margin-left: 1%;
			    margin-right: 1%;
			    padding: 0px;
			  .mint-searchbar{
			    	padding: 0;
			    	margin-top:9px;
			    	border-radius: 20px;
			    	width:100%;
			    	background-color: #fff;
			    	.mint-searchbar-inner{
			    		border-radius: 20px;
			    		width: 100%;
			    		input{
			    			height: 100%;
			    			margin-left:5px;
			    		}
			    		
			    	}
			    }
			  }
			  .login{
			  	float: left;
			  	height: 52.5px;
    			width: 10%;
    			font-size: 16px;
    			text-align: center;
    			line-height: 52.5px;
    			margin-left:1%;
    			margin-right:1%;
    			color: #fff;
			  }
			}
			/*header模块结束*/
			.mint-search-list{
				top: 9px;
			}
		}

</style>
