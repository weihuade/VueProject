<template>
    <div class="list">
        <div class="header">
			<div class="pic">
				<img src="../img/homeimg/logonew.png" />
			</div>
			<mt-search 
				v-model="keywords"
				cancel-text 
				autofocus 
				placeholder="请输入您要搜索的商品"
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
                    <li>
                        <img src="../img/list/list-item1.jpg" alt="">
                    </li>
                    <li>
                        <img src="../img/list/list-item2.jpg" alt="">
                    </li>
                </ul>
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
        tabs: [{
            icon: 'list-unordered'
        }],
        };
    },
}
</script>
<style lang="scss">
    .list {
        background: #f2f2f2;
        max-width: 640px;
        min-width: 320px;
        margin: 0px auto;
        margin-bottom: 43px;
        overflow: auto;
        /*这里有问题*/
        .header {
            width: 100%;
            height: 52.5px;
            background: #31c27c;
            .pic {
                float: left;
                width: 10%;
                height: auto;
                max-width: 53px;
                max-height: 50px;
                margin-left: 10px;
                img {
                    width: 100%;
                    margin-top: 10px;
                    max-width: 36px;
                    max-height: 36px;
                }
            }
            .mint-search {
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
                height: 52.5px;
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
                margin-bottom: 10px;
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
                    width: 49%;
                    background: #fff;
                    margin-top: 10px;
                    box-shadow: 0px -1px 4px #dfe4e2; 
                    float: left;
                    img{
                        width: 100%;
                        height: auto;
                        margin: 0px auto;
                        padding: 0px;
                        line-height: normal;
                        vertical-align: top;
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
    }
</style>



