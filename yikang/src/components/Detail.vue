<template>
    <div class="detail">
        <ul class="det-header clearfix">
            <li class="det-back"></li>
            <li>商品</li>
            <li>详情</li>
            <li>评价</li>
            <li>登录</li>
        </ul>
        <div class="banner">
            <!-- 预留 -->
        </div>
        <div class="det-info">
            <ul></ul>
            <ul></ul>
            <ul></ul>
        </div>
        <ul class="det-maker">
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
.detail{
    background: #f2f2f2;
    .det-header{
        background-color: #f7f7f7;
        border-bottom: 1px #ccc solid;
        li{
            width: 22.5%;
            height: 40px;
            line-height: 40px;
            float: left;
            text-align: center;
            font-size: 15px;
        }
        .det-back{
            width: 10%;
        }
    }
    .banner{
        height: 340px;
        width: 100%;
        background: #58bc58;
    }
    .det-info{
        height: 100px;
        width: 100%;
        margin-bottom: 8px;
        background: #8617b9;
    }
    .det-maker{
        li{
            margin-bottom: 8px;
            min-height: 30px;
            line-height: 30px;
            background: #29dfc0;
        }
    }
}

.clearfix:after{
    content:'';
    display:block;
    clear:both;
    height:0;
    visibility:hidden;
}
    
</style>

