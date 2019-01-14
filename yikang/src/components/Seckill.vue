<template>
<<<<<<< HEAD
	<div >
		秒杀
=======
	<div class="nwwest-roll" id="nwwest-roll">
	
		<ul id="roll-ul">
			<li v-for="item in list" ref="rollul" :key="item" :class="{anim:animate==true}">
				<span class="name">{{item.name}}</span>                         
				<span class="site">{{item.site}}</span>                         
				<span class="gsmc">{{item.gsmc}}</span>                     
			</li>
			</ul>
>>>>>>> 6238a5d338b0b32d2cf12111373feccb115914d0
	</div>
</template>
<script>
export default {
	
}
</script>
<<<<<<< HEAD
<style>
=======
<style scoped>

</style>


<style >
.nwwest-roll {
    padding-left:15px;
    height:210px;
    margin:10px auto;
    overflow:hidden;
     transition:all 0.5s;
}
.nwwest-roll li{
  height:35px;
  line-height:35px;
>>>>>>> 6238a5d338b0b32d2cf12111373feccb115914d0

</style>