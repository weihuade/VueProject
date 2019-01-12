<template>
    <div>
        <!-- 顶部搜索框 -->
        <div class="cateSearch">
        <router-link :to="{name:'Search'}">
            <mt-search v-model="value" cancel-text autofocus placeholder="搜索疾病，症状或药品"></mt-search>
        </router-link>
        </div>
        <div class="catesNav clearfix">
            <!-- 侧边栏 -->
            <div class="cateList" ref="listHeight">
                <ul>
                    <li>医药馆</li>
                    <li>器械馆</li>
                    <li>养生保健馆</li>
                    <li>生活馆</li>
                    <li>中药馆</li>
                    <li>母婴商城</li>
                    <li>眼镜城</li>
                    <li>怡康e卡通</li>
                    <li>康币城</li>
                    <li>临床新特药</li>
                    <li>隐形眼镜</li>
                    <li>增值服务</li>
                    <li>生活便利品</li>
                </ul>
            </div>
            <!-- 楼层 -->
            <div class="cateCont" ref="contHeight">
                <div class="cont-detail">
                    <div class="cont-hd">
                        <a class="cont-more" href="#">内科用药</a>
                    </div>
                    <ul class="cont-items  clearfix">
                        <li>
                            <a href="#">
                                <img src="../img/classily/items/item1.jpg" alt="">
                                <span>感冒发烧</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="../img/classily/items/item2.jpg" alt="">
                                <span>呼吸系统</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="../img/classily/items/item3.jpg" alt="">
                                <span>消化系统</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="../img/classily/items/item4.jpg" alt="">
                                <span>内分泌药</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="../img/classily/items/item4.jpg" alt="">
                                <span>内分泌药</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="../img/classily/items/item4.jpg" alt="">
                                <span>内分泌药</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="../img/classily/items/item4.jpg" alt="">
                                <span>内分泌药</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="../img/classily/items/item4.jpg" alt="">
                                <span>内分泌药</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="../img/classily/items/item4.jpg" alt="">
                                <span>内分泌药</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="../img/classily/items/item4.jpg" alt="">
                                <span>内分泌药</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="../img/classily/items/item4.jpg" alt="">
                                <span>内分泌药</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="../img/classily/items/item4.jpg" alt="">
                                <span>内分泌药</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="../img/classily/items/item4.jpg" alt="">
                                <span>内分泌药</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="../img/classily/items/item4.jpg" alt="">
                                <span>内分泌药</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="../img/classily/items/item4.jpg" alt="">
                                <span>内分泌药</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="cont-detail">
                    <div class="cont-hd">
                        <a class="cont-more" href="#">内科用药</a>
                    </div>
                    <ul class="cont-items  clearfix">
                        <li>
                            <a href="#">
                                <img src="../img/classily/items/item1.jpg" alt="">
                                <span>感冒发烧</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="../img/classily/items/item2.jpg" alt="">
                                <span>呼吸系统</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="../img/classily/items/item3.jpg" alt="">
                                <span>消化系统</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="../img/classily/items/item4.jpg" alt="">
                                <span>内分泌药</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="../img/classily/items/item4.jpg" alt="">
                                <span>内分泌药</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="../img/classily/items/item4.jpg" alt="">
                                <span>内分泌药</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="../img/classily/items/item2.jpg" alt="">
                                <span>呼吸系统</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="../img/classily/items/item3.jpg" alt="">
                                <span>消化系统</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="../img/classily/items/item4.jpg" alt="">
                                <span>内分泌药</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="../img/classily/items/item2.jpg" alt="">
                                <span>呼吸系统</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="../img/classily/items/item3.jpg" alt="">
                                <span>消化系统</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="../img/classily/items/item2.jpg" alt="">
                                <span>呼吸系统</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="../img/classily/items/item3.jpg" alt="">
                                <span>消化系统</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="../img/classily/items/item2.jpg" alt="">
                                <span>呼吸系统</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="../img/classily/items/item3.jpg" alt="">
                                <span>消化系统</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="../img/classily/items/item2.jpg" alt="">
                                <span>呼吸系统</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="../img/classily/items/item3.jpg" alt="">
                                <span>消化系统</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="../img/classily/items/item4.jpg" alt="">
                                <span>内分泌药</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        value: "",
        clientHeight:"",
        };
    },
    mounted(){
        this.clientHeight=`${document.documentElement.clientHeight}`
        window.onresize=function temp(){
            this.clientHeight=`${document.documentElement.clientHeight}`;
        }
    },
    watch: {
        // 如果 `clientHeight` 发生改变，这个函数就会运行
        clientHeight: function () {
            this.changeFixed(this.clientHeight)
        }
    },
    methods:{
        changeFixed(clientHeight){                        //动态修改样式
            // console.log(clientHeight);
            this.$refs.listHeight.style.height = clientHeight-96+ 'px';
            this.$refs.contHeight.style.height = clientHeight-96+ 'px';
            // console.log(this.$refs);
        },
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
html body{
    margin: 0;
    padding: 0;
    overflow: hidden;
}
<<<<<<< HEAD
.search{
    width: 100%;
    .mint-searchbar{
        background-color: #31c27c;
=======
div{
    .cateSearch {
        width: 100%;
        height: 53px;
        position:fixed;
        top: 0;
        .mint-search {
            height: 100%;
            .mint-searchbar {
                background-color: #31c27c;
                height: 53px;
                padding: 8px 15px;
                .mint-searchbar-inner {
                    width: 50%;
                    height: 26px;
                    border-radius: 8px;
                }
            }
        }
    }
    .catesNav{
        width: 100%;
        margin-top:53px ;
        .cateList{
            float: left;
            width: 35%;
            // height: 570px;
            overflow-y: auto;
            background-color: #fafafa;
            display: block;
            li{
                width: 100%;
                text-align: left;
                line-height: 60px;
                display: block;
                color: #323232;
                height: 60px;
                background: url(../img/classily/li-bg.jpg) no-repeat;
                background-size: auto 100%;
                text-indent: 28px;
                font-size: 14px;
            }
        }
        .cateCont{
            float: left;
            width: 65%;
            // height: 570px;
            overflow-y: auto;
            display: block;
            background-color: #ffffff;
            .cont-detail{
                .cont-hd{
                    text-align: center;
                    height: 60px;
                    line-height: 60px;
                    background: url(../img/classily/cont-bg.jpg) no-repeat center;
                    background-size: auto;
                    width: 90%;
                    margin: 0px auto;
                    .cont-more{
                        font-size: 12px;
                        color: #5A5A5A;
                        width: 40%;
                        height: 60px;
                        line-height: 60px;
                        background: #fff;
                        display: block;
                        margin: 0px auto;
                    }
                }
                .cont-items{
                    li{
                        height: 85px;
                        width: 29%;
                        float: left;
                        text-align: center;
                        margin-left: 2%;
                        margin-bottom: 1%;
                        a{
                        img{
                                width: 50px;
                                height: 50px;
                                border-radius: 50%;
                            } 
                            span{
                                width: 100%;
                                display: block;
                                overflow: hidden;
                                height: 30px;
                                color: #7a7a7a;
                                font-size: 12px;
                                white-space: nowrap;
                            }
                        }
                    }
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
>>>>>>> 9d69da496588a8a72253d78dcc2f580476f1b0fa
    }
}

</style>