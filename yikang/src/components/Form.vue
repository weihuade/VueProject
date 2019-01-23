<template>
<div id="form">
    <div class="title">
        <myheader :title="data.title" :path="data.path"/>
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
                path:'/mine',
                title:'我的订单',
            },
        }
    },
    methods:{
        
    }
}
</script>

<style lang="scss" scoped>

</style>


