import * as types from './types.js'

//关于token的存放位置
//1.只用vuex存储：刷新页面vuex重新初始化，token消失导致需要重新登录
//2.window.sessionStorage: 初始化的时候用sessionStorage来赋值，刷新页面重新初始化，但因为sessionStorage里面存有token有值，
//那么state.token就有值了,vue-router就不会拦截，则无需重新登录。

const mutations = {
    [types.LOGIN]: (state, data) => {
        //更改token的值
        state.token = data;
        window.localStorage.setItem('token', data);
    },
    [types.LOGOUT]: (state) => {
        //登出的时候要清除token
        state.token = null;
        window.localStorage.removeItem('token');
    },
    [types.ADD_ADDRESS]: (state,obj) => {
        state.address = obj;
        window.localStorage.setItem('address', obj);
    },
    [types.REMOVE_ADDRESS]: (state,id) => {
        state.address = data;
        window.localStorage.removeItem('address', id);
    },
};

export default mutations;