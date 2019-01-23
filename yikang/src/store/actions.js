import * as types from './types.js'

//actions常用于异步更改状态。也就是说它一般用来先发送请求，然后再commit
export default {
    //token
    UserLogin({ commit }, data){
        commit(types.LOGIN, data);
    },
    UserLogout({ commit }){
        commit(types.LOGOUT);
    },
    //地址
    AddressAdd({ commit }, obj){
        commit(types.ADD_ADDRESS, obj);
    },
    AddressRemove({ commit }, id){
        commit(types.REMOVE_ADDRESS, id);
    }
}