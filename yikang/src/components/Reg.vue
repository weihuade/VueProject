<template>
<div id="reg">
    <div class="title">
        <mt-header title="注册">
            <router-link to="/" slot="left">
                <mt-button icon="back" @click="$router.back(-1)"></mt-button>
            </router-link>
        </mt-header>
    </div>
    <div class="main">
        <mt-field placeholder="填写手机号码"></mt-field>
        <mt-field placeholder="填写验证码" type="password"><span class="random" @click="createCode">{{random}}</span></mt-field>
        <mt-field placeholder="手机验证码"><mt-button class="mycode" type="primary">点击获取</mt-button></mt-field>
        <mt-field placeholder="请输入姓名"></mt-field>
        <mt-field placeholder="填写密码(不少于6位)" :type="eye?'password':''"><i @click="eye=!eye"><img :src="eye?imgSrc[0]:imgSrc[1]"/></i></mt-field>
        <div class="mint-cell text">
            <label>只允许APP端使用邀请功能</label>
        </div>
        <div class="btn-bar">
            <mt-button type="primary">注册</mt-button>
        </div>
         <div class="mint-cell protocol">
            <label>注册即视为同意<a href="#">怡康医药注册协议</a></label>
        </div>
    </div>
</div>
</template>

<script>

import '../sass/common.scss';
// import {Icon} from 'vant';
import Vue from 'vue';
// Vue.use(Icon);                                               
export default {
    data(){
        return{
            random:8888,
            eye:false,
            imgSrc:[
                '../../static/img/mine/closeEye.png',
                '../../static/img/mine/openEye.png'
            ]
        }
    },
    methods:{
        createCode(){
            this.random=parseInt(Math.random()*8000+1000);
        }
    },
    mounted(){
        this.createCode()
    }
}
</script>

<style lang="scss" scoped>
#reg{
    div.main{
        a.mint-cell{
            .mycode {
                top: 8px;
                position: relative;
                background: #31c27c;
            }
            .random{
                z-index: 5;
                width: 94px;
                height: 40px;
                color: #ccc;
                font-size: 20px;
                line-height: 40px;
                text-align: center;               
                display: inline-block;                             
                border: 1px solid #ccc;
            }
        } 
        div.text{
            line-height: 50px;
            label{
                margin-left: 9px;
                font-size: 14px;
            }
        }
        div.protocol{
            height: 50px;
            line-height: 50px;
            text-align: center;
            margin-bottom: 60px;
            label{
                color: #CCC;
                margin-left: 20px;
                font-size: 14px;
                a{
                    text-decoration: underline;
                }
            }
        }
    }
}
</style>
