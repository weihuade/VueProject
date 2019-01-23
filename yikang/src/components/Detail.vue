<template>
    <div class="detail">
        <ul class="det-header clearfix">
            <li class="det-back"></li>
            <li>商品</li>
            <li>详情</li>
            <li>评价</li>
            <li>登录</li>
        </ul>
        <div class="det-maker">
             <!-- v-for="items" :key="list.id"  v-for="list in items" :key="list.id"-->
             <!-- 轮播图还未做，现只显示一张 -->
            <img :src="'https://image.jianke.com'+prods.productImageUrl" alt=""  class="det-img"/>
            <ul class="det-com">
                <li class="title">{{prods.productName}}</li>
                <li class="price">￥{{((prods.ourPrice)/100).toFixed(2)}}</li>
                <dl class="clearfix">
                    <dt>功效：</dt> 
                    <dd class="u-show">{{prods.introduction}}</dd> 
                </dl>
                <dl class="clearfix">
                    <dt>厂商：</dt> 
                    <dd class="u-show">{{prods.manufacturer}}</dd> 
                </dl>
            </ul>
            <ul class="det-other">
                <dl class="clearfix">
                    <dt>用药需知</dt> 
                    <dd class="u-show">{{prods.dosage}}</dd> 
                </dl>
                <dl class="clearfix">
                    <dt>包装规格</dt> 
                    <dd class="u-show">{{prods.packingProduct}}</dd> 
                </dl>
                <dl class="clearfix">
                    <dt>成分：</dt> 
                    <dd class="u-show">{{prods.productMainmaterial}}</dd> 
                </dl>
                <dl class="clearfix">
                    <dt>规格：</dt> 
                    <dd>{{prods.packing}}</dd> 
                </dl>
                <dl class="clearfix">
                    <dt>选择：</dt> 
                    <dd>点击选择商品数量</dd> 
                </dl>
                <mt-actionsheet :actions="actions" v-model="sheetVisible">
                    <span>不出来就死</span>
                </mt-actionsheet>
            </ul>
            <span><a class="flip">- - - - 点击查看详情 - - - -</a></span>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
        prods:[],
        };
    },
    /* methods:{
        goback(){
            this.$router.push({name:'Classily'});
        },
    }, */
    created(){
        let pid=this.$route.params.pcode;
        console.log(pid);
        this.$axios.get("http://localhost:12345",{
            params:{
                // rq:"https://fe-wcgi.jianke.com/v1/searchs?cid=5411&pn=1&ps=10",
                rq:`https://fe-wcgi.jianke.com/v1/products/${pid}?main=%E2%9C%93`,
            }}).then(res=>{
            let dataList=res.data.product;
            this.prods=dataList.product;
            console.log(this.prods);
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
        padding-bottom: 60px;
        // background: rgb(212, 209, 209);
        .det-img{
            height: auto;
            width: 100%;
        }
        li{
            min-height: 40px;
            line-height: 40px;
            padding: 0 5%;
            color: #666;
            background: #fff;
        }
        dl{
            min-height: 30px;
            padding: 0 5%;
            color: #666;
            background: #fff;
            dt{
                float: left;
                width: 22%;
                line-height: 40px;
                color: #999;
            }
            dd{
                float: left;
                width: 75%;
                // padding-right: 5%;
                line-height: 40px;
            }
            .u-show{
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
            }
        }
        .det-com{
            margin-bottom: 15px;
            background: rgb(212, 209, 209);
            .title{
                color: #333;
                font-size: 20px; 
            }
            .price{
                color: #ff6464;
                font-weight:bold;
                font-size: 20px; 
            }
        }
        span{
            width: 100%;
            height: 25px;
            padding: 10px 0;
            text-align: center;
            .flip{
                display:block;
                line-height: 25px;
                margin-top: 15px;
                color: #666;
                text-align: center;
            }
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

