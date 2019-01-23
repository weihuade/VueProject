<template>
<div id="login" class="pages">
    <div class="title">
        <mt-header title="登录">
            <router-link to="/login" slot="left">
                <mt-button icon="back" @click="goBack"></mt-button>
            </router-link>
        </mt-header>
    </div>
    <div class="main">
        <mt-field placeholder="填写手机号" type="number" v-model="ruleForm.phone"></mt-field>
        <mt-field placeholder="填写密码" type="password" v-model="ruleForm.password"></mt-field>
        <div class="mint-cell">
            <label><input type="checkbox" name="" id="" v-model="checked"><a href="#">记住密码</a></label>
        </div>
        <div class="btn-bar">
            <mt-button type="primary" @click="login('ruleForm')">确定</mt-button>
        </div>
       <div class="wap_reg">
           <a href="#" @click="goto('/reg')">免费注册</a>
           <a href="#" class="f-r">忘记密码</a>
       </div>
    </div>
</div>
</template>

<script>
// import api from '../api';
import '../sass/common.scss';
import { MessageBox } from 'mint-ui';
export default {
    data(){
        return{
            checked:false,
            ruleForm:{
                phone:'',
                password:''
            },
            userToken:''
        }
    },
   //页面加载调用获取cookie值
    mounted() {
        this.getCookie();
    },
    methods:{
        login(){
            const self = this;
            if(self.ruleForm.phone!=='' && self.ruleForm.password!==''){
                /** 
                    MessageBox('提示', '登录成功');
                    sessionStorage.setItem('token',new Date().getTime());
                        setTimeout(()=>{
                        // this.$router.replace({path:'/mine'})
                        this.$router.goBack();
                    },1000)
                    if(self.checked == true){
                        //传入账号名，密码，和保存天数3个参数
                        self.setCookie(self.ruleForm.phone, self.ruleForm.password, 7);
                    }else{
                    //清空Cookie
                        self.clearCookie(); 
                    }
                */
               /**
                * 这是原来的请求方式
                * this.$axios.post('/login',{
                    params:{
                        phone:self.ruleForm.phone,
                        password:self.ruleForm.password
                    }
                })
                */
                this.$api.userLogin({ 
                                phone:self.ruleForm.phone,
                                password:self.ruleForm.password
                })
                .then(res=>{
                    console.log("res===",res)
                    let data = res.data;
                    if(data.data.code){
                        MessageBox('提示', '登录成功');
                        let token = data.token;//获取后端返回的token
                        this.$store.dispatch('UserLogin', token);
                        setTimeout(()=>{
                            this.goBack();//返回上一级
                        },1000)
                        if(self.checked == true){
                            //传入账号名，密码，和保存天数3个参数
                            self.setCookie(self.ruleForm.phone, self.ruleForm.password, 7);
                        }else{
                        //清空Cookie
                            self.clearCookie(); 
                        }
                    }else{
                        MessageBox('提示', '账号或密码错误');
                    }
                }).catch(err=>{
                    console.log("err",err)
                });
            }else{
                MessageBox('提示', '账户密码不能为空');
            } 
        },

        goto(path){
            this.$router.push({path})
        },

        goBack () {
            window.history.length > 1
                ? this.$router.go(-1)
                : this.$router.push('/')
        },

        //设置cookie
        setCookie(c_phone, c_pwd, exdays) {
            var exdate = new Date(); //获取时间
            exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays); //保存的天数
            //字符串拼接cookie
            window.document.cookie = "userPhone" + "=" + c_phone + ";path=/;expires=" + exdate.toGMTString();
            window.document.cookie = "userPwd" + "=" + c_pwd + ";path=/;expires=" + exdate.toGMTString();
        },

        //读取cookie
        getCookie() {
            if (document.cookie.length > 0) {
                this.checked = true;
                var arr = document.cookie.split('; '); //这里显示的格式需要切割一下自己可输出看下
                for (var i = 0; i < arr.length; i++) {
                    var arr2 = arr[i].split('='); //再次切割
                    //判断查找相对应的值
                    if (arr2[0] == 'userPhone') {
                        this.ruleForm.phone = arr2[1]; //保存到保存数据的地方
                    } else if (arr2[0] == 'userPwd') {
                        this.ruleForm.password = arr2[1];
                    }
                }
            }
        },

        //清除cookie
        clearCookie() {
            this.setCookie("", "", -1); //修改2值都为空，天数为负1天就好了
        }
    }
}
</script>


<style lang="scss" scoped>
// 样式放在sass/common.scss文件夹中,购物车、登陆注册都共用一些样式
</style>
