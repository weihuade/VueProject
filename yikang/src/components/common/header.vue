<template>
<!-- <header> -->
    <mt-header :title="title" class="myhead">
        <router-link to="" :slot="slotName">
            <mt-button :icon="iconName" @click="goBack"></mt-button>
        </router-link>
    </mt-header>
<!-- </header> -->
</template>

<script>
export default {
    props:{
        path:{
            type:String,
            default:'/home'
        },
        title:{
            type:String,
            required:true
        },
        slotName:{
            type:String,
            default:'left'
        },
        iconName:{
            type:String,
            default:'back'
        }
    },
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
