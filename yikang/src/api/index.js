import instance  from '../axios';

export default {
    //验证token
    verifyToken(token){
        return instance.get('/verifyToken',{headers:{token}});
    },
    //用户注册
    userRegister(data){
        return instance.post('/api/register_new', data);
    },
    //用户登录
    userLogin(data){
        return instance.post('/login', data); 
    },
    // //获取用户
    // getUser(){
    //     return instance.get('/api/user');
    // },
    //删除用户
    delUser(data){
        return instance.post('/api/delUser', data);
    }
}
