<template>
<div id="addAdress">
    <div class="title">
        <myheader :title="data.title" :path="data.path"/>
    </div>
    <div class="main">
        <!-- <mt-field label='收货人姓名:' placeholder="请输入收货人姓名" type="text" ></mt-field>
        <mt-field label='手机号码:' placeholder="请输入手机号码" type="number" ></mt-field> -->
        <van-address-edit
        :area-list="areaList"
        show-postal
        show-delete
        show-set-default
        show-search-result
        @save="onSave"
        @delete="onDelete"
        :search-result="searchResult"
        @change-detail="onChangeDetail"
        />
    </div>
</div>
</template>

<script>
import myheader from './common/header';
import '../sass/common.scss';
//按需引入组件
import {AddressEdit,AddressList ,Toast} from 'vant';

import areaList from '../mock/areaList.js';
export default {
    created(){
        // console.log(areaList)
    },
    components:{
        myheader,
        "van-address-edit":AddressEdit
    },
    data(){
        return{
            areaList:areaList,
            searchResult: [],
            data:{
                path:'/setLocation',
                title:'新建收货地址',
            },
        }
    },
    methods: {
        onSave(content) {
            Toast('保存成功');
            // console.log(content)
            this.$store.state.address = content;
            // this.$store.dispatch('AddressAdd', content);
            console.log("store==",this.$store.state.address);
        },
        onDelete() {
            Toast('删除成功');
        },
        onChangeDetail(val) {
            if (val) {
                this.searchResult = [{
                name: '汇通产业园B9栋3楼',
                address: '广州市天河区'
                }];
            } else {
                this.searchResult = [];
            }
        }
    }
}
</script>

<style lang="scss" scoped>
#addAdress{
    div.main{
        margin-top: 0;
        width: 100%;
        padding: 0;
        position: absolute;
        top: 52.5px;
        div{
            padding: 0 15px;
        }
    }
}
</style>
