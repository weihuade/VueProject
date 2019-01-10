<template>
	<div class="page">
		<div class="header">
			<div class="pic">
				<img src="../img/homeimg/logonew.png" />
			</div>
			<mt-search v-model="value" cancel-text autofocus placeholder="请输入您需要购买的商品">
				<!--搜索结果显示出来的模块<mt-cell>-->
				<mt-cell>

				</mt-cell>

			</mt-search>
			<div class="login">登录</div>
		</div>
		<!--下一模块开始的位置-->
		<mt-swipe :auto="4000">
			<mt-swipe-item v-for="item in recommend" :key="item.id">
				<img :src="item.path" />
			</mt-swipe-item>
		</mt-swipe>
		<div class="qiangg_sy">
			<ul>
				<li><img src="//www.yaoking.cn/wap_themes/yaoking_new/images/home-zixun.png" /></li>
				<li><img src="//www.yaoking.cn/wap_themes/yaoking_new/images/home-Horn.png" /></li>
				<li>
					<div id="myscroll">
						<a title="怡康医药“24小时药店”开通">
							<div>怡康医药“24小时药店”开通</div>
							<div>
								<span>公告</span> 昼夜守候，贴心服务！
							</div>
						</a>
						<!--第二个-->
						<a title="怡康医药“24小时药店”开通">
							<div>怡康医药“24小时药店”开通</div>
							<div>
								<span>公告</span> 昼夜守候，贴心服务！
							</div>
						</a>
					</div>
				</li>
			</ul>
		</div>
		<div class="fenl_sy">
			<ul>
				<li>
				<div>
					<img src="//www.yaoking.cn/wap_themes/yaoking_new/images/home-icon1.png"/>
				</div>
				<p>领券</p>
				</li>
				<!--2-->
				<li>
				<div>
					<img src="//www.yaoking.cn/wap_themes/yaoking_new/images/home-icon1.png"/>
				</div>
				<p>领券</p>
				</li>
				<!--3-->
				<li>
				<div>
					<img src="//www.yaoking.cn/wap_themes/yaoking_new/images/home-icon1.png"/>
				</div>
				<p>领券</p>
				</li>
				<!--4-->
				<li>
				<div>
					<img src="//www.yaoking.cn/wap_themes/yaoking_new/images/home-icon2.png"/>
				</div>
				<p>领券</p>
				</li>
				
				<!--5-->
				<li>
				<div>
					<img src="//www.yaoking.cn/wap_themes/yaoking_new/images/home-icon2.png"/>
				</div>
				<p>领券</p>
				</li>
			</ul>
		</div>
		<div class="more">
			<a class="title_ms">
				<img src="../img/homeimg/mrms_ico.jpg"/>
			<div class="jlsj">
				<span class="ts">  距离结束        |</span>&nbsp;&nbsp;
        <span class="time">0-11:0-26:0-11</span>
 		</div>
 		<div class="ms_more">更多&gt;</div>
			</a>
			<div class="index_topic">
				<ul>
					<li>
						<a>
					<img src="http://img1.yaoking.cn//93/96/18/5391fdcc6fb0d3389d411a08d9822b40faf.jpg@170w_170h?1542074779#h"/>	
					</a>
					<p class="topic_name">善存银片</p>
					<p class="topic_price">153.80</p>
					</li>
					
					<li>
						<a>
					<img src="http://img1.yaoking.cn//93/96/18/5391fdcc6fb0d3389d411a08d9822b40faf.jpg@170w_170h?1542074779#h"/>	
					</a>
					<p class="topic_name">善存银片</p>
					<p class="topic_price">153.80</p>
					</li>
					
					<li>
						<a>
					<img src="http://img1.yaoking.cn//93/96/18/5391fdcc6fb0d3389d411a08d9822b40faf.jpg@170w_170h?1542074779#h"/>	
					</a>
					<p class="topic_name">善存银片</p>
					<p class="topic_price">153.80</p>
					</li>
					<li>
						<a>
					<img src="http://img1.yaoking.cn//93/96/18/5391fdcc6fb0d3389d411a08d9822b40faf.jpg@170w_170h?1542074779#h"/>	
					</a>
					<p class="topic_name">善存银片</p>
					<p class="topic_price">153.80</p>
					</li>
				</ul>
		</div>
		
		</div>
		
	</div>
</template>

<script>
	export default {

		data() {
			return {
				value: '',
				recommend: []
			}
		},
		created() {
			this.recommend = [{
					id: 1,
					path: require('../img/slideshow/slideshow1.jpg')
				},
				{
					id: 2,
					path: require('../img/slideshow/slideshow2.jpg')
				},
				{
					id: 3,
					path: require('../img/slideshow/slideshow3.jpg')
				},
				{
					id: 4,
					path: require('../img/slideshow/slideshow4.jpg')
				},
			]
		}

	}
	//console.log(data())
</script>

<style lang="scss">
	body {
		background: #f2f2f2;
	}
	
	.page {
		max-width: 640px;
		min-width: 320px;
		margin: 0px auto;
		margin-bottom: 43px;
		.header {
			width: 100%;
			height: 52.5px;
			background: #31c27c;
			.pic {
				float: left;
				width: 10%;
				height: auto;
				max-width: 53px;
				max-height: 50px;
				margin-left: 10px;
				img {
					width: 100%;
					margin-top: 10px;
					max-width: 36px;
					max-height: 36px;
				}
			}
			.mint-search {
				background: #31c27c;
				width: 69%;
				height: 100%;
				height: 52.5px;
				float: left;
				text-align: center;
				line-height: 52.5px;
				margin-left: 1%;
				margin-right: 1%;
				padding: 0px;
				.mint-searchbar {
					padding: 0;
					margin-top: 9px;
					border-radius: 20px;
					width: 100%;
					background-color: #fff;
					.mint-searchbar-inner {
						border-radius: 20px;
						width: 100%;
						input {
							height: 100%;
							margin-left: 5px;
						}
					}
				}
			}
			.login {
				float: left;
				height: 52.5px;
				width: 10%;
				font-size: 16px;
				text-align: center;
				line-height: 52.5px;
				margin-left: 1%;
				margin-right: 1%;
				color: #fff;
			}
		}
		/*header模块结束*/
		.mint-search-list {
			top: 9px;
		}
		.mint-swipe {
			max-height: 239.06px;
			margin-bottom: 4px;
			.mint-swipe-items-wrap {
				overflow: initial;
				min-height: 150px;
				max-height: 239.06px;
				img {
					height: 100%;
					width: 100%;
					/*这里应该做图片的自适应还没做*/
				}
			}
		}
		/*--------*/
		.qiangg_sy {
			overflow: hidden;
			width: 100%;
			max-width: 640px;
			min-width: 320px;
			margin: 0px auto;
			box-shadow: 0px 2px 5px #dfe4e2;
			ul li:nth-child(1) {
				width: 19.68%;
				border-right: 1px solid #f0f0f0;
				img {
					width: 85%;
					height: auto;
					max-width: 78px;
					max-height: 56px;
					vertical-align: middle;
					margin-bottom: 5px;
				}
			}
			ul li:nth-child(2) {
				width: 12.18%;
				img {
					width: 45%;
					height: auto;
					vertical-align: middle;
				}
			}
			ul li:nth-child(3) {
				width: 67.14%;
				#myscroll {
					width: 100%;
					font-size: 12px;
					height: 60px;
					overflow: hidden;
					margin-top: 0px;
					a {
						width: 100%;
						height: 60px;
						overflow: hidden;
						display: block;
						color: #333;
						text-decoration: none;
					}
				}
			}
			ul li:nth-child(3) div {
				width: 100%;
				height: 22px;
				line-height: 22px;
				text-indent: 7px;
				text-align: left;
				color: #ed0a3e;
			}
			ul li:nth-child(3) div {
				width: 100%;
				height: 22px;
				line-height: 22px;
				text-indent: 7px;
				text-align: left;
				color: #ed0a3e;
			}
			ul li:nth-child(3) div:nth-child(1) {
				color: #1f1f1f;
				margin-top: 5px;
				font-size: 13px;
			}
			ul li:nth-child(3) div span {
				background: #ed0a3e;
				color: #fff;
				display: inline-block;
				font-size: 12px;
				width: 38px;
				height: 22px;
				line-height: 22px;
				margin-right: 10px;
			}
			ul {
				list-style: none;
				li {
					height: 60px;
					line-height: 60px;
					margin: 0px auto;
					text-align: center;
					float: left;
					background: #fff;
					margin-bottom: 7px;
				}
			}
		}
.fenl_sy{
	overflow: hidden;
		width: 100%;
    max-width: 640px;
    min-width: 320px;
    margin: 0px auto;
    margin-bottom: 7px;
    box-shadow: 0px 2px 5px #dfe4e2;
    ul{
    	li{
    		width: 25%;
		    height: auto;
		    margin: 0px auto;
		    float: left;
		    text-align: center;
		    padding-top: 13px;
		    background: #fff;
		    div{
			    width: 100%;
	    		height: auto;
	    		img{
	    			width: 62%;
				    height: auto;
				    margin: 0px auto;
				    max-height: 60px;
				    max-width: 60px;
	    		}
		    }
		    p{
		    	line-height: 30px;
			    color: #323232;
			    font-size: 14px;
			    padding-bottom: 10px;
		    }
    	}
    }
}
		.more{
			width: 100%;
	    height: 171px;
	    background: #fff;
	    margin-bottom: 8px;
	    margin-top: 8px;
	    .title_ms {
		    width: 100%;
		    height: 35px;
		    line-height: 35px;
		    color: #000;
		    font-size: 12px;
		    display: block;
		    img{
		    	display: block;
			    float: left;
			    width: 87px;
			    height: 19px;
			    margin-left: 2%;
			    margin-top: 8px;
		    }
		    .jlsj {
			    width: auto;
			    height: 100%;
			    margin-left: 2%;
			    float: left;
			    .time {
   				 color: #f00;
					}
				}
				.ms_more {
				    float: right;
				    margin-right: 3%;
				    width: auto;
				    height: 100%;
				}
				
			}
			.index_topic{
				width: 100%;
    		height: auto;
    		overflow: hidden;
    		ul{
    			height: 135px;
    			overflow: hidden;
    			li{
    					width: 87px;
					    height: 135px;
					    float: left;
					    margin-left: 6px;
					    a{
					    	width: 95%;
						    height: 90px;
						    text-align: center;
						    line-height: 90px;
						    display: block;
						    img{
							    max-height: 90%;
							    display: inline;
							    vertical-align: middle;
						    }
					    }
					    .topic_name {
					    font-size: 12px;
					    width: 100%;
					    text-align: center;
					    line-height: 23px;
					    overflow: hidden;
					    height: 23px;
							}
							.topic_price {
						    text-align: center;
						    font-size: 14px;
						    width: 100%;
						    text-align: center;
						    line-height: 18px;
						    color: #f00;
						    
						}
    			}
    		}
			}
	}
		
		
	}
</style>