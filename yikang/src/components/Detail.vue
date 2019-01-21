<template>
    <div class="detail">
        <ul class="det-header clearfix">
            <li class="det-back"></li>
            <li>商品</li>
            <li>详情</li>
            <li>评价</li>
            <li>登录</li>
        </ul>
        <ul class="det-maker">
             <!-- v-for="items" :key="list.id" -->
             <!-- 有点问题 -->
            <img :src="'https://image.jianke.com'+items[0].thumbnailUri" alt=""  class="det-img">
            <li>{{items[0].productName}}</li>
            <li>噢噢噢噢</li>
            <li>啪啪啪</li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
        items:[],
        };
    },
    /* methods:{
        goto(){
            this.$router.push({name:'Classily'});
        },
    }, */
    created(){
        this.$axios.get("http://localhost:12345",{
            params:{
                rq:"https://fe-wcgi.jianke.com/v1/searchs?cid=5411&pn=1&ps=10",
            }}).then(res=>{
            let dataList=res.data.products.results;
            this.items=dataList;
            console.log(this.items[0].thumbnailUri);
        })
    },
}
</script>
<style lang="scss">
.detail{
    background: #f2f2f2;
    .det-header{
        background-color: #f7f7f7;
        border-bottom: 1px #ccc solid;
        li{
            width: 22.5%;
            height: 40px;
            line-height: 40px;
            float: left;
            text-align: center;
            font-size: 15px;
        }
        .det-back{
            width: 10%;
        }
    }
    
    .det-maker{
        .det-img{
            height: 340px;
            width: 100%;
            background: #58bc58;
        }
        li{
            margin-bottom: 8px;
            min-height: 30px;
            line-height: 30px;
            background: #29dfc0;
        }
    }
}

.clearfix:after{
    content:'';
    display:block;
    clear:both;
    height:0;
    visibility:hidden;
}
    
</style>

