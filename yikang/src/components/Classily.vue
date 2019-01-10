<template>
    <div>
        <div class="search">
        <mt-search v-model="value" cancel-text placeholder="搜索疾病，症状或药品"></mt-search>
        </div>
        <div class="catesNav">
            <div class="cate-list">
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div class="cateCont">
                <div></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        value: ""
        };
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
div{
    overflow: hidden;
    .search {
        width: 100%;
        height: 53px;
        position:fixed;
        .mint-search {
            height: 100%;
            .mint-searchbar {
                background-color: #31c27c;
                height: 53px;
                padding: 8px 15px;
                .mint-searchbar-inner {
                    width: 50%;
                    height: 26px;
                    border-radius: 8px;
                }
            }
        }
    }
    .catesNav{
        width: 100%;
        margin-top:53px ;
        // height: 615px;
        .cate-list{
            float: left;
            width: 35%;
            overflow-y: auto;
            background-color: #fafafa;
            // height: 100%;
            li{
                width: 100%;
                text-align: left;
                line-height: 60px;
                display: block;
                color: #323232;
                height: 60px;
                background: url(../img/classilyimg/li-bg.jpg) no-repeat;
                background-size: auto 100%;
                text-indent: 28px;
                font-size: 14px;
            }
        }
        .cateCont{
            float: left;
            width: 65%;
            background-color: #be1966;
            // height: 100%;
        }
    }
}

</style>