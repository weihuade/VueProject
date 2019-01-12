<template>
  <div class="search">
      <mt-search v-model="value" cancel-text placeholder="搜索疾病，症状或药品"></mt-search>
  </div>
</template>

<script>
export default {
    data(){
        return{
            value:'',
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
body{
    margin: 0;
    padding: 0;
}
.search{
    width: 100%;
    .mint-searchbar{
        background-color: #31c27c;
    }
}
</style>