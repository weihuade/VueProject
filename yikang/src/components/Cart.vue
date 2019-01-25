<template class="cart">
    <div id="cart" class="pages">
        <div class="title">
            <myheader :title="data.title" :path="data.path"/>
        </div>
        <div class="main">
            <!--<div>
                <img src="../../static/img/cart/cart_empty.png" alt="" class="img">
            </div>
            <p class="empty-tip">
                您可以： 将<a class="lnk" style="color: #00aa55" @click="goto('/favorite')">收藏夹</a>中的商品添加进来
                <br/>
                或者去看看 
                <a  @click="goto('/home')" class="lnk" style="color: #00aa55">首页 »</a>
            </p>-->
            <van-card
			  num="2"
			  price="2.00"
			  desc="描述信息"  
			  title="商品标题"
			/>
			<van-card
			  num="2"
			  price="2.00"
			  desc="描述信息"  
			  title="商品标题"
			/>
            <van-submit-bar
			  :price="3050"
			  button-text="提交订单"
			/>
        </div>
    </div>
</template>


<script>
import myheader from './common/header';
import '../sass/common.scss';
import { Card,SubmitBar } from 'vant';
export default {
    components:{
        myheader,
        "van-card": Card,
        "van-submit-bar":SubmitBar
    },
    data(){
        return{
            data:{
                path:'/home',
                title:'购物车',
            },
        }
    },
    methods:{
        goto(path){
            this.$router.push({path})
        }
    },
    created(){

    }
}
</script>

<style lang="scss" scoped>
/*.cart{
	background-color: #ccc;
}*/
#cart{
    div.main{
    	/*width: 100%;
    	height: 568px;*/
        padding: 0 0;
        margin-top: 52.5px;
        background-color: #ccc;
        /*position: absolute;
        top: 52.5px;*/
        img{
            display: block;
            width: 100%;
            height: 100%;
        }
        p.empty-tip{
            width: 83%;
            margin: 0px auto;
            font-size: 16px;
            text-align: center;
            padding-top: 20px;
            line-height: 30px;
            color: #999;
            a{
                text-decoration: none;
            }
        }
    }
}
</style>

