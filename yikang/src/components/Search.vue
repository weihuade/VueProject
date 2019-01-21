<template>
<div>
    <div class="search">
        <div class="search-bg" @click="goto">
            <img src="../img/search/search-bg.png"/>
        </div>
        <mt-search v-model="keyword" cancel-text="搜索" placeholder="请输入搜索词" @input="search">
            <!--搜索结果显示出来的模块<mt-cell>-->
            <mt-cell v-for="item in items" :key="item.id">
                <span>
                    {{item.productName}}
                </span>
            </mt-cell>
        </mt-search>
    </div>
</div>
    
</template>
<script>
export default {
    data() {
        return {
        keyword: "",
        items:[],
        };
    },
    methods:{
        goto(){
            this.$router.push({name:'Classily'});
        },
        search(){
            clearTimeout(this.timer);
            if(!this.keyword) return;
            this.timer=setTimeout(()=>{
                this.$axios.get("http://localhost:12345",{
					params:{
                        rq:"https://fe-wcgi.jianke.com/v1/searchs?cid=5411&pn=1&ps=10",
					}}).then(res=>{
                    let dataList=res.data.products.results;
                    this.items=dataList;
                    // console.log(this.items);
                })
            },500)
            
        },
    },
}
</script>
<style lang="scss">
.search {
    width: 100%;
    height: 55px;
    position:fixed;
    top: 0;
    background-color: #31c27c;
    .search-bg{
        float: left;
        width: 10%;
        height: 100%;
        img {
            width: 100%;
            margin-top: 20px;
            margin-left: 50%;
            width: 15px;
            height: 15px;
        }
    }
    .mint-search {
        background: #31c27c;
        width: 90%;
        height: 100%;
        // height: 52.5px;
        float: left;
        text-align: center;
        /* line-height: 52.5px;
        margin-left: 1%;
        margin-right: 1%; */
        padding: 0px;
        .mint-searchbar {
            /* padding: 0;
            margin-top: 9px;
            border-radius: 20px;
            width: 100%; */
            height: 55px;
            padding: 8px 15px;
            background-color: #31c27c;
            .mint-searchbar-inner {
                border-radius: 8px;
                width: 100%;
                input {
                    height: 100%;
                    margin-left: 5px;
                }
            }
            a{
                color: #ffffff;
            }
        }
        .mint-search-list{
            z-index: 15;
            top:55px;
            overflow: unset;
            padding-top: 0;
            .mint-cell-title {
                flex: 0;
            }
            .mint-cell-value {
                // text-align: left;
                margin-top: 0;
            }
        }
    }
}
</style>
