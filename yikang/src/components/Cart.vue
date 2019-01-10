<template>
    <div id="cart">
        <div class="title">
            <mt-header title="购物车">
                <router-link to="/" slot="left">
                    <mt-button icon="back" @click="$router.back(-1)"></mt-button>
                </router-link>
            </mt-header>
        </div>
        <div class="main">
            <div>
                <img src="../../static/img/cart/cart_empty.png" alt="" class="img">
            </div>
            <p class="empty-tip">
                您可以： 将<a class="lnk" href="#" style="color: #00aa55">收藏夹</a>中的商品添加进来
                <br/>
                或者去看看 
                <a href="./" class="lnk" style="color: #00aa55">首页 »</a>
            </p>
        </div>
    </div>
</template>


<script>
import Vue from 'vue';
import '../sass/common.scss';
export default {
    
}
</script>

<style lang="scss" scoped>
    #cart{
        div.main{
            padding: 0 0;
            margin-top: 0;
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

