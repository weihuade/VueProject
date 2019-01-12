<template>
<div id="form">
    <div class="title">
        <mt-header title="我的订单">
            <router-link to="/mine" slot="left">
                <mt-button icon="back" @click="goBack"></mt-button>
            </router-link>
        </mt-header>
    </div>
</div>
</template>

<script>
import '../sass/common.scss';
export default {
    methods:{
        goBack () {
            window.history.length > 1
                ? this.$router.go(-1)
                : this.$router.push('/')
        }
    }
}
</script>

<style lang="scss" scoped>

</style>


