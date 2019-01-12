<template>
<div id="wallet">
    <div class="title">
        <mt-header title="修改密码">
            <router-link to="/mine" slot="left">
                <mt-button icon="back" @click="goBack"></mt-button>
            </router-link>
        </mt-header>
    </div>
    <div class="main">
        <mt-field placeholder="旧密码"></mt-field>
        <mt-field placeholder="新密码(不少于6位)" :type="eye?'password':''">
            <i @click="eye=!eye">
                <img :src="eye?imgSrc[0]:imgSrc[1]"/>
            </i>
        </mt-field>
        <mt-field placeholder="确认密码" type="password"></mt-field>
        <div class="btn-bar">
            <mt-button type="primary">提交</mt-button>
        </div>
         <div class="mint-cell protocol">
            <label>拨打客服电话：400-799-9120</label>
        </div>
    </div>
</div>
</template>

<script>
import '../sass/common.scss';
export default {
    data(){
        return{
            eye:false,
            imgSrc:[
                '../../static/img/mine/closeEye.png',
                '../../static/img/mine/openEye.png'
            ]
        }
    },
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
        .btn-bar{
            margin-top: 20px;
        }
    }
</style>

