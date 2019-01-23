<template>
<div id="Location">
    <div class="title">
        <mt-header title="地址管理">
            <router-link to="/mine" slot="left">
                <mt-button icon="back" @click="goBack"></mt-button>
            </router-link>
        </mt-header>
    </div>
    <div class="main">
        <van-address-list
        v-model="chosenAddressId"
        :list="list"
        :disabled-list="disabledList"
        disabled-text="以下地址超出配送范围"
        @add="onAdd"
        @edit="onEdit"
        />
        <!-- <div>
            <img src="../../static/img/mine/adress_empty.jpg" alt="" class="img">
        </div> -->
        <!-- <div class="btn-bar">
            <mt-button type="primary"  @click="goto('/addAdress')">添加新地址</mt-button>
        </div> -->
    </div>
</div>
</template>

<script>
import { AddressList,Toast} from 'vant';
import '../sass/common.scss';
// import CityList from '../mock/citylist.js';
// import { IndexList, IndexSection } from 'mint-ui';
export default {
    components:{
        "van-address-list":AddressList
    },
    data() {
    return {
      chosenAddressId: '1',
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
          address: '浙江省杭州市拱墅区莫干山路 50 号'
        },
      ],
      disabledList: [
        {
          id: '6',
          name: '王五',
          tel: '1320000000',
          address: '浙江省杭州市滨江区江南大道 15 号'
        }
      ]
    }
  },
    created(){

    },
    methods:{
        goBack () {
            window.history.length > 1
                ? this.$router.go(-1)
                : this.$router.push('/')
        },
        onAdd() {
            // Toast('新增地址');
            this.$router.push("/addAdress")
        },
        onEdit(item, index) {
            Toast('编辑地址:' + index);
        }
        // goto(path){
        //     this.$router.push({path})
        // }
    }
}
</script>

<style lang="scss" scoped>
#Location{
    div.main{
        padding: 0 0;
        margin-top: 0px;
        position: absolute;
        top: 52.5px;
        img{
            display: block;
            width: 100%;
            height: 100%;
        }
        .btn-bar{
            text-align: center;
            margin-top: 31px;
            .mint-button{
                height: 60px;
                width: 142px;
            }
        }
    }
}
</style>

