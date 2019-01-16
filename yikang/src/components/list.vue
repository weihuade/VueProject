<template>
<div class="listsHeight" ref="listsHeight">
    <div class="list">
        <div class="header">
			<div class="pic">
				<img src="../img/homeimg/logonew.png" />
			</div>
			<mt-search 
				v-model="keywords"
				cancel-text 
				autofocus 
				placeholder="请输入要搜索的商品"
				 >
				<!--@input="search"  搜索结果显示出来的模块<mt-cell>-->
				<!-- <mt-cell v-for="item in result" :key="item.cat_id">
					<span>
						{{item.father_name}}
					</span>
				</mt-cell> -->

			</mt-search>
			<div class="list-tab">
                <!-- <myicons :type="tabs.icon" /> -->
            </div>
		</div>
        <div class="gallery">
            <div class="gallery-tab">
                <ul class="trigger-list clearfix">
                    <li>综合</li>
                    <li>销量</li>
                    <li>价格</li>
                    <li>筛选</li>
                </ul>
                <ul class="pt-list clearfix">
                    <li @click="goto('Detail')">
                        <div class="pt-img">
                            <img src="../img/list/list-item1.jpg" alt="">
                        </div>
                        <div class="pt-name">感冒灵颗粒哈哈哈哈哈哈好11</div>
                        <div class="pt-price">1010</div>
                    </li>
                    <li>
                        <div class="pt-img">
                            <img src="../img/list/list-item2.jpg" alt="">
                        </div>
                        <div class="pt-name">感冒灵颗粒哈哈哈哈哈哈好11</div>
                        <div class="pt-price">1020</div>
                    </li>
                    <li>
                        <div class="pt-img">
                            <img src="../img/list/list-item1.jpg" alt="">
                        </div>
                        <div class="pt-name">感冒灵颗粒哈哈哈哈哈哈好11</div>
                        <div class="pt-price">1022</div>
                    </li>
                    <li>
                        <div class="pt-img">
                            <img src="../img/list/list-item1.jpg" alt="">
                        </div>
                        <div class="pt-name">感冒灵颗粒哈哈哈哈哈哈好11</div>
                        <div class="pt-price">1022</div>
                    </li>
                    <li>
                        <div class="pt-img">
                            <img src="../img/list/list-item1.jpg" alt="">
                        </div>
                        <div class="pt-name">感冒灵颗粒哈哈哈哈哈哈好11</div>
                        <div class="pt-price">1022</div>
                    </li>
                    <li>
                        <div class="pt-img">
                            <img src="../img/list/list-item2.jpg" alt="">
                        </div>
                        <div class="pt-name">感冒灵颗粒哈哈哈哈哈哈好11</div>
                        <div class="pt-price">1022</div>
                    </li>
                    <li>
                        <div class="pt-img">
                            <img src="../img/list/list-item1.jpg" alt="">
                        </div>
                        <div class="pt-name">感冒灵颗粒</div>
                        <div class="pt-price">1022</div>
                    </li>
                </ul>
                <div class="pageview">
                    <select>
                        <option class="flip">1/8</option>
                        <option class="flip">2/8</option>
                        <option class="flip">3/8</option>
                        <option class="flip">4/8</option>
                        <option class="flip">5/8</option>
                    </select>
                    <a class="flip">下一页</a>
                </div>
            </div>
		</div>
    </div>
</div>
    
</template>
<script>
import Vue from 'vue';
import myicons from '../plugins/icons';
//	//使用插件
Vue.use(myicons);
export default {
    data() {
        return {
        keywords: "",
        clientHeight:"",
        tabs: [{
            icon: 'list-unordered'
        }],
        };
    },
    mounted(){
        this.clientHeight=`${document.documentElement.clientHeight}`
        window.onresize=function temp(){
            this.clientHeight=`${document.documentElement.clientHeight}`;
            // console.log(this.clientHeight);
        }
    },
    watch: {
        // 如果 `clientHeight` 发生改变，这个函数就会运行
        clientHeight: function () {
            this.changeFixed(this.clientHeight)
        }
    },
    methods:{
        //动态修改样式
        changeFixed(clientHeight){                        
            this.$refs.listsHeight.style.height = clientHeight-43+ 'px';
            // console.log(clientHeight);
        },
        goto(name){
            this.$router.push({name});
            // console.log(this.$router);
        },
    },
}
</script>
<style lang="scss">
.listsHeight{
    overflow-y: auto;
    .list {
        background: #f2f2f2;
        // max-width: 640px;
        min-width: 320px;
        margin: 0px auto;
        // margin-bottom: 43px;
        overflow: auto;
        /*这里有问题*/
        .header {
            width: 100%;
            height: 53px;
            background: #31c27c;
            .pic {
                float: left;
                width: 10%;
                height: auto;
                max-width: 53px;
                height: 53px;
                margin-left: 10px;
                img {
                    width: 100%;
                    margin-top: 10px;
                    max-width: 36px;
                    max-height: 36px;
                }
            }
            .mint-search {
                // background: #31c27c;
                width: 69%;
                height: 100%;
                height: 53px;
                float: left;
                text-align: center;
                line-height: 52.5px;
                margin-left: 1%;
                margin-right: 1%;
                padding: 0px;
                .mint-searchbar {
                    padding: 0;
                    margin-top: 9px;
                    border-radius: 20px;
                    width: 100%;
                    background-color: #fff;
                    .mint-searchbar-inner {
                        border-radius: 20px;
                        width: 100%;
                        input {
                            height: 100%;
                            margin-left: 5px;
                        }
                    }
                }
            }
            .list-tab {
                float: left;
                height: 53px;
                width: 10%;
                font-size: 16px;
                text-align: center;
                line-height: 52.5px;
                margin-left: 1%;
                margin-right: 1%;
                color: #fff;
            }
        }
        .gallery{
            .trigger-list{
                box-shadow: 0px 4px 20px #dfe4e2;
                // margin-bottom: 10px;
                background: #fff;
                font-size: 15px;
                width: 100%;
                li{
                    height: 45px;
                    line-height: 45px;
                    font-size: 16px;
                    float: left;
                    width: 25%;
                    text-align: center;
                }
            }
            .pt-list{
                li{
                    width: 48%;
                    background: #fff;
                    // margin-top: 10px;
                    margin: 10px 1% 0 1%;
                    box-shadow: 0px -1px 4px #dfe4e2; 
                    float: left;
                    .pt-img{
                        width: 80%;
                        margin: 0px auto;
                        // height: 37vw;
                        max-height: 266px;
                        border: 0;
                        img{
                            width: 100%;
                            height: auto;
                            margin: 0px auto;
                            padding: 0px;
                            line-height: normal;
                            vertical-align: top;
                    }
                    }
                    .pt-name{
                        width: 90%;
                        margin: 0px auto;
                        font-size: 14px;
                        font-weight: bold;
                        margin-top: 10px;
                        padding-bottom: 10px;
                        border-bottom: 1px solid #d7d7d7;
                        text-align: center;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        white-space: nowrap;
                    }
                    .pt-price{
                        font-weight: bold;
                        font-size: 16px;
                        width: 80%;
                        margin: 0px auto;
                        color: #fc4f4f;
                        text-align: left;
                        padding-top: 10px;
                        overflow: hidden;
                    }
                }
            }
            .pageview{
                width: 100%;
                height: 25px;
                padding: 10px 0;
                text-align: center;
                .flip{
                    display: inline-block;
                    padding: 1px 5px 2px;
                    margin: 0 2px;
                    border: 1px solid #ddd;
                    background: #fff;
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
    }
}
    
</style>



