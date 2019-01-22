<template>
    <div>
        <!-- 顶部搜索框 -->
        <div class="cateSearch" @click="goto('Search')">
            <mt-search v-model="value" cancel-text placeholder="搜索疾病，症状或药品"></mt-search>
        </div>
        <div class="catesNav clearfix">
            <!-- 侧边栏 -->
            <div class="cateList" ref="listHeight">
                <ul v-for="lists in cates" :key="lists.id">
                    <li @click="getData(lists.id,lists.categoryName)" :class="{active : active == lists.categoryName}" >{{lists.categoryName}}</li>
                </ul>
            </div>
            <!-- 楼层 -->
            <div class="cateCont" ref="contHeight">
                <div class="cont-detail clearfix">
                    <li v-for="item of items" :key="item.id" @click="goto('List',item.categoryCode)" >
                        <img :src="item.categoryImage" alt=""/>
                        <span>{{item.categoryName}}</span>
                    </li>
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
        cates:[],
        items:[],
        active:"name",
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
            this.$refs.listHeight.style.height = clientHeight-96+ 'px';
            this.$refs.contHeight.style.height = clientHeight-96+ 'px';
        },
        goto(name,code){
            this.$router.push({name,params:{code}});
        },
        getData(gid,name){
            this.$axios.get("http://localhost:12345",{
                        params:{
                            rq:`https://wcgi.jianke.com/category/api/fullCategories?pid=${gid}&platform=1`,
                        }}).then(res=>{
                let dataCate=res.data;
                this.items=dataCate;
            })
            this.active = name;
            // console.log(this);
        }
    },
    created(){
        this.$axios.get("http://localhost:12345",{
					params:{
                        rq:"https://wcgi.jianke.com/category/api/fullCategories?platform=1",
					}}).then(res=>{
            let dataCate=res.data;
            this.cates=dataCate;
        }),
        this.$axios.get("http://localhost:12345",{
                    params:{
                        rq:`https://wcgi.jianke.com/category/api/fullCategories?pid=191&platform=1`,
                    }}).then(res=>{
            let dataCate=res.data;
            this.items=dataCate;
        })
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
html body{
    margin: 0;
    padding: 0;
    /*overflow: hidden;*/
}
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
            // height: 570px;/* 测试 */
            overflow-y: auto;
            display: block;
            background-color: #ffffff;
            .cont-detail{
                padding-top: 1.5rem;
                li{
                    height: 120px;
                    width: 48%;
                    float: left;
                    text-align: center;
                    margin-left: 2%;
                    margin-bottom: 1%;
                    list-style: none;
                    img{
                        width: 70px;
                        height: 70px;
                    } 
                    span{
                        width: 100%;
                        display: block;
                        overflow: hidden;
                        height: 30px;
                        line-height: 30px;
                        color: #7a7a7a;
                        font-size: 15px;
                        white-space: nowrap;
                    }
                }
            }
        }
        
    }
    .active {
        background: url(../img/classily/li-bg.jpg) no-repeat;
        color: #31c27c;
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