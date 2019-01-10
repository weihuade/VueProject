<template>
<div>
    <div class="title">
        <mt-header title="登录">
            <router-link to="/" slot="left">
                <mt-button icon="back" @click="$router.back(-1)"></mt-button>
            </router-link>
        </mt-header>
    </div>
    <div class="main">
        <mt-field placeholder="填写手机号"></mt-field>
        <mt-field placeholder="填写密码" type="password"></mt-field>
        <div class="mint-cell">
            <label><input type="checkbox" name="" id=""><a href="#">记住密码</a></label>
        </div>
        <div class="btn-bar">
            <mt-button type="primary">确定</mt-button>
        </div>
       <div class="wap_reg">
           <a href="#" @click="toReg('/reg')">免费注册</a>
           <a href="#" class="f-r">忘记密码</a>
       </div>
    </div>
    
</div>
</template>

<script>
import '../sass/common.scss';
export default {
    methods:{
        toReg(path){
            this.$router.push({path})
        }
    }
}
</script>

<style lang="scss">
    div.title{
        header.mint-header{
            background: #31c27c;
            font-size: 20px;
            height: 52.5px;
            padding: 0 15px;
        }
    }
    div.main{
        padding: 0 15px;
        margin-top: 20px;
        a.mint-cell{
            border: 0;
            height: 60px;
            line-height: 60px;
            padding: 0;
            margin: 1px 0;
            border-bottom: 1px solid #31C27C;
            .mint-cell-value{
                .mint-field-clear{
                    margin-top: 23px;
                }
            }    
            .mint-cell-wrapper{
                .mint-cell-value>input.mint-field-core{
                    height: 20px;
                    line-height: 20px;
                    font-size: 16px;
                    text-indent: 10px;
                    padding: 30px 0px 10px 0px;
                }
            } 
        }
        div.mint-cell{
            height: 70px;
            line-height: 80px;
            label{
                margin-left: 20px;
                a{
                    color: #CCCCCC;
                    font-size: 16px;
                }
            }
        }
        div.btn-bar{
            margin-bottom: 15px;
            button{
                width: 100%;
                height: 60px;
                text-align: center;
                line-height: 60px;
                background: #31C27C;
                border-radius: 3px;
                color: #fff;
                font-size: 20px;
            }
        }
        div.wap_reg{
            padding: 0 20px;
            a{
                text-decoration: none;
            }
            a:first-child{
                color: #31C27C;
            }
            a:last-child{
                color: #898989;
            }
        }
    }
</style>
