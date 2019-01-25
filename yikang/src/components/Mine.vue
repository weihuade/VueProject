<template>
<div id="Mine">
    <div class="mine-head">
        <div class="margin"></div>
        <div class="profile">
            <a><img src="../img/mine/profile.png" alt="头像"></a>
        </div>
        <div class="info">
            <span class="inf-left">用户账户</span>
            <span class="inf-right"><a href="#">注册会员</a></span>
        </div>
        <div class="favorite">
            <span class="f-icon">
                <img src="../img/mine/star.png" alt="">
            </span>
            <span class="f-right">
                <a href="#">我的收藏</a>
            </span>
        </div>
    </div>
    <div class="mine-main">
        <mt-cell title="我的订单" is-link to="/form" class="form">
            <span>查看所有订单</span>
            <img slot="icon" src="../img/mine/iconform.png" width="17" height="23">
        </mt-cell>
        <mt-cell title="我的钱包" is-link to="/wallet" class="border-b">
            <img slot="icon" src="../img/mine/iconqb.png" width="17" height="23">
        </mt-cell>
        <mt-cell title="修改密码" is-link to="/changePW" class="border-b">
            <img slot="icon" src="../img/mine/iconmm.png" width="17" height="23">
        </mt-cell>
        <mt-cell title="地址管理" is-link to="/setLocation" class="border-b last-border">
            <img slot="icon" src="../img/mine/icondz.png" width="17" height="23">
        </mt-cell>
        <div class="btn-bar">
            <mt-button type="primary" @click="logout" class="log-out">退出登录</mt-button>
        </div>
        <div class="footer">
            <div class="foot-load">
                <div class="load-left">
                    <a href="#"><img src="../img/mine/download.png" alt=""></a>
                </div>
                <div class="load-right">
                    <a href="#">下载【怡康到家】手机app</a>
                </div>
            </div>
            <div style="clear: both"></div>
            <p>怡康医药全国免费专线400-799-9120</p>
            <p>药品交易资格证：陕C20140002 ©怡康医药网上药店</p>
            <p>2001-2016版权所有</p>
        </div>
        <div class="bottom_margin"></div>
    </div>
</div>
</template>

<script>
// import '../sass/common.scss';
import { MessageBox } from 'mint-ui';
import { Cell } from 'mint-ui';
export default {
    methods:{
        logout(){
            let token = localStorage.getItem("token");
            MessageBox('提示', '退出成功');
            setTimeout(()=>{
                this.$router.push({path:'/login'})
            },1000)
            this.$store.dispatch('UserLogout');//登出
            // localStorage.removeItem('token');
        }
    },
}
</script>

<style lang="scss" scoped>
#Mine{ 
    a{
        text-decoration: none;
    }
    div.mine-head{
        background: url(../../static/img/mine/bg.png)no-repeat center;
        width: 100%;
        height: 240px;
        position: relative;
        background-size: cover;
        margin-bottom: 10px;
        .margin{
            height: 30px;
        }
        .profile{
            width: 100%;
            margin: 0px auto;
            height: 103px;
            text-align: center;
            a{
                display: block;
                img{
                    width: 85px;
                    height: 85px;
                    border-radius: 50%;
                }
            }
        }
        .info{
            width: 100%;
            height: 50px;
            margin: 0px auto;
            color: #fff;
            font-size: 16px;
            text-align: center;
            .inf-right{
                    display: inline-block;
                    width: 79px;
                    text-align: center;
                    margin-left: 1%;
                    background: url(../../static/img/mine/yuan.png)no-repeat center;
                    background-size: 100% auto;
            }
            a{
                color: #fff;
            }
        }
        .favorite{
            width: 100%;
            height: 60px;
            margin: 0px auto;
            position: absolute;
            bottom: 0;
            left: 0;
            background-color: rgba(255,255,255,0.15);
            span{
                display: inline-block;
            }
            .f-icon{
                float: left;
                margin-left: 4%;
                margin-top: 15px;
                width: 30px;
                height: 30px;
                img{
                    width: 100%;
                    height: auto;
                }
            }
            .f-right{
                width: 47%;
                float: left;
                height: 60px;
                line-height: 60px;
                text-align: left;
                margin-left: 10px;
                margin-right: 10%;
                font-size: 16px;
                a{
                    color: #fff;
                }
            }
        }
    }
    div.mine-main{
        overflow: hidden;
        .form{
            float: left;
            width: 100%;
            height: 60px;
            margin: 0px auto;
            box-shadow: 0px 2px 5px #dfe4e2;
            margin-bottom: 10px;
            background: #fff;
        }
        .border-b{
            width: 100%;
            height: 60px;
            line-height: 60px;
            border-bottom: 1px solid #e8e8e8;
            background: #fff;
            float: right;
        }
        .last-border{
            width: 100%;
            box-shadow: 0px 2px 5px #dfe4e2;
            margin-bottom: 15px;
        }
        .btn-bar{
            overflow: hidden;
            margin: 0px auto;
            // margin-top: 15px;
            height: 50px;
            width: 84%;
            box-shadow: 0px 2px 5px #fab7b0;
            border-radius: 5px;
            background: #fff;
            .log-out{
                width: 100%;
                height: 100%;
                background: #ef6f5c;
            }
        }
        .footer{
            width: 100%;
            margin: 0px auto;
            padding: 30px 0px;
            padding-bottom: 30px;
            .foot-load{
                overflow: hidden;
                width: 186px;
                margin: 0px auto;
                height: 30px;
                .load-left{
                    text-align: right;
                    height: 30px;
                    float: left;
                    margin-right: 2%;
                    a img {
                        width: 28px;
                        height: 28px;
                    }
                }
                .load-right{
                    text-align: left;
                    height: 30px;
                    float: left;
                    line-height: 30px;
                    a{
                        color: #2cc079;
                        font-size: 13px;
                    }
                }
            }
            p {
                width: 100%;
                margin: 0px auto;
                height: 30px;
                line-height: 30px;
                text-align: center;
                font-size: 13px;
                color: #a4a4a4;
            }
        }
        .bottom_margin {
            clear: both;
            margin-bottom: 60px;
        }
    }
}
</style>
