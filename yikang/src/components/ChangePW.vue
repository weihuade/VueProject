<template>
<div id="wallet">
    <div class="title">
        <myheader :title="data.title" :path="data.path"/>
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
import myheader from './common/header';
export default {
    components:{
        myheader,
    },
    data(){
        return{
            data:{
                path:'/changePW',
                title:'修改密码',
            },
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
        div.main{
            margin-top: 52.5px;
            // padding: 0;
        }
        .btn-bar{
            margin-top: 20px;
        }
    }
</style>

