<template>
<div>
    <div class="search">
        <div class="search-bg">
            <router-link :to="{name:'Classily'}">
                <img src="../img/search/search-bg.png" />
            </router-link>
        </div>
        <mt-search v-model="keyword" cancel-text="搜索" placeholder="请输入搜索词" @input="search">
            <!--搜索结果显示出来的模块<mt-cell>-->
            <!-- <mt-cell>
                无数据，样式有点bug
            </mt-cell> -->
        </mt-search>
    </div>
</div>
    
</template>
<script>
export default {
    data() {
        return {
        keyword: ""
        };
    },
    methods:{
        search(){
            console.log(this)
        }
    },
    created(){
        // console.log(this)
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
        width: 90%;
        height: 100%;
        .mint-searchbar {
            background-color: #31c27c;
            height: 55px;
            padding: 8px 15px;
            .mint-searchbar-inner {
                height: 26px;
                border-radius: 8px;
            }
            a{
                color: #ffffff;
            }
        }
    }
}
</style>
