<template>
<div id="wallet">
    <div class="title">
        <mt-header title="我的钱包">
            <router-link to="/mine" slot="left">
                <mt-button icon="back" @click="goBack"></mt-button>
            </router-link>
        </mt-header>
    </div>
    <div class="main">
        <mt-cell title="余额" is-link value="查看"></mt-cell>
        <mt-cell title="怡康币" is-link value="查看"></mt-cell>
        <mt-cell title="优惠券" is-link value="查看"></mt-cell>
    </div>
</div>
</template>

<script>
import '../sass/common.scss';
export default {
    methods:{
        goBack () {
            window.history.length > 1
                ? this.$router.go(-1)
                : this.$router.push('/')
        }
    }
}
</script>

<style lang="scss" scoped>
#wallet{
    .main{
        overflow: hidden;
        padding: 0;
        margin-top: 0;
        background: #f7f7f7;
        a.mint-cell{
            width: 100%;
            height: 60px;
            line-height: 60px;
            border-bottom: 1px solid #e8e8e8;
            float: right;
            text-indent: 50px;
            margin-top: 10px;
            border-bottom: 1px solid #e8e8e8;
        }
        a.mint-cell:first-child{
            background: url(../../static/img/mine/yue.jpg) no-repeat left center #fff;
            background-size: 40px;
            background-position: 10px;
        }
        a.mint-cell:nth-child(2){
            background: url(../../static/img/mine/jiankb.jpg) no-repeat left center #fff;
            background-size: 40px;
            background-position: 10px;
        }
        a.mint-cell:last-child{
            border-bottom: 0px;
            background: url(../../static/img/mine/youhq.jpg) no-repeat left center #fff;
            background-size: 40px;
            background-position: 10px;
        }
    }
}
</style>

