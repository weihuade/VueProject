<template>
	<div class="page" ref="listHeight">
		<div class="header">
			<div class="pic">
				<img src="../img/homeimg/logonew.png" />
			</div>
			<mt-search 
				v-model="keyword"
				cancel-text 
				placeholder="请输入您需要购买的商品"
				@input="search" 
				 >
				<!--搜索结果显示出来的模块<mt-cell>-->
				<mt-cell v-for="item in result" :key="item.cat_id">
					<span>
						{{item.father_name}}
					</span>
				</mt-cell>

			</mt-search>
			<div class="login" @click="goto('Mine')">登录</div>
		</div>
		<!--下一模块开始的位置-->
		<mt-swipe :auto="4000">
			<mt-swipe-item v-for="item in recommend" :key="item.id" @click.native="gotodetail('Homedetail',item.id)">
				<img :src="item.path"/>
			</mt-swipe-item>
		</mt-swipe>
		<div class="qiangg_sy">
			<ul>
				<li><img src="../img/homeimg/jiangkang.png" /></li>
				<li><img src="../img/homeimg/laba.png" /></li>
				<li>
					<div id="myscroll">
						<a :title="text.title"  v-for="(text, index) in arr" :key="index">
							<div>{{text.title}}</div>
							<div>
								<span>{{text.intensive}}</span> {{text.hint}}
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
						<img src="../img/homeimg/home-icon1.png" />
					</div>
					<p>领券</p>
				</li>
				<!--2-->
				<li>
					<div>
						<img src="../img/homeimg/home-icon2.png" />
					</div>
					<p>每周特惠</p>
				</li>
				<!--3-->
				<li>
					<div>
						<img src="../img/homeimg/home-icon3.png" />
					</div>
					<p>品牌周末惠</p>
				</li>
				<!--4-->
				<li>
					<div>
						<img src="../img/homeimg/home-icon4.png" />
					</div>
					<p>季节用药</p>
				</li>

				<!--5-->
				<li>
					<div>
						<img src="../img/homeimg/home-icon5.png" />
					</div>
					<p>新特药</p>
				</li>
				<!--6-->
				<li>
					<div>
						<img src="../img/homeimg/home-icon6.png" />
					</div>
					<p>母婴专场</p>
				</li>
				<!--7-->
				<li>
					<div>
						<img src="../img/homeimg/home-icon7.png" />
					</div>
					<p>恰适康</p>
				</li>
				<!--8-->
				<li>
					<div>
						<img src="../img/homeimg/home-icon8.png" />
					</div>
					<p>风湿骨病</p>
				</li>
			</ul>
		</div>
		<div class="more">
			<a class="title_ms">
				<img src="../img/homeimg/mrms_ico.jpg" />
				<div class="jlsj">
					<span class="ts">  距离结束        |</span>&nbsp;&nbsp;
					<span class="time">0-11:0-26:0-11</span>
				</div>
				<div class="ms_more" @click="goto('Homemore')">更多&gt;</div>
			</a>
			<div class="index_topic">
				<ul>
					<li>
						<a>
							<img src="../img/homeimg/mrms_ico1.jpg" />
						</a>
						<p class="topic_name">优生骨胶原美白嫩肤护手霜 </p>
						<p class="topic_price">19.50</p>
					</li>

					<li>
						<a>
							<img src="../img/homeimg/mrms_ico2.jpg" />
						</a>
						<p class="topic_name">一次性使用医用口罩  少女粉</p>
						<p class="topic_price">11.64</p>
					</li>

					<li>
						<a>
							<img src="../img/homeimg/mrms_ico3.jpg" />
						</a>
						<p class="topic_name">枸橼酸西地那非片（万艾可）</p>
						<p class="topic_price">495.00</p>
					</li>
					<li>
						<a>
							<img src="../img/homeimg/mrms_ico4.jpg" />
						</a>
						<p class="topic_name">善存银片</p>
						<p class="topic_price">153.80</p>
					</li>
				</ul>
			</div>

		</div>
		<div class="qiangh_sy">
			<div class="qiangh_left">
				<a><img src="../img/homeimg/home-time.png" /></a>
			</div>
			<!--右边-->
			<div class="qiangh_right">
				<div class="qiangh_right_top">
					<a><img src="../img/homeimg/hometime1.jpg" /></a>
				</div>
				<div class="qiangh_right_bottom">
					<ul>
						<li><img src="../img/homeimg/hometime3.jpg" /></li>
						<li><img src="../img/homeimg/hometime4.jpg" /></li>
					</ul>
				</div>

			</div>
		</div>
		<div class="sellhot">
			<img src="//www.yaoking.cn/wap_themes/yaoking_new/images/hotsalelogo.png" />
		</div>

		<!--热卖-->
		<div class="hotsale">
			<ul>
				<li>
					<div class="goods-pic">
						<img src="http://img1.yaoking.cn//ea/5a/ad/3de68971c38a3489572cd55e1ad83fdffb4.jpg@170w_170h?1546655182#h" alt="复方阿胶浆">
					</div>
					<p class="goods-price-info">
						<span class="price">￥498.00</span>
						<del>498.000</del>
					</p>
				</li>
				<li>
					<div class="goods-pic">
						<img src="http://img1.yaoking.cn//34/36/b1/5d5acd0d27bc0336013968df0ee12493bf4.jpg@170w_170h?1502788640#h" alt="复方阿胶浆">
					</div>
					<p class="goods-price-info">
						<span class="price">￥398.00</span>
						<del>398.00</del>
					</p>
				</li>
				<li>
					<div class="goods-pic">
						<img src="http://img1.yaoking.cn//83/cc/d5/f56287e11f80b10db8591f702c74cac31a7.jpg@170w_170h?1546655271#h" alt="复方阿胶浆">
					</div>
					<p class="goods-price-info">
						<span class="price">￥268.00</span>
						<del>268.000</del>
					</p>
				</li>
				<li>
					<div class="goods-pic">
						<img src="http://img1.yaoking.cn//f0/04/66/d20aafda2c6fe2ebf2caf1e8c5bc11c3446.jpg@170w_170h?1546655594#h" alt="复方阿胶浆">
					</div>
					<p class="goods-price-info">
						<span class="price">￥888.00</span>
						<del>888.000</del>
					</p>
				</li>
			</ul>
		</div>
		<div class="ggzj">
			<img src="http://img1.yaoking.cn//a6/8f/4f/f2a9e580c01532272e3c6c8f3fde1e22990.png?1541995175#w">
		</div>
		<div class="qiangh_sy">
			<div class="qiangh_left">
				<a class="left_1">
					<img src="//img1.yaoking.cn//6d/9b/a4/25227341ecb9815a709b3c87bd3ceea9e58.png?1478140525#w">
				</a>
			</div>
			<div class="qiangh_right">
				<div class="qiangh_right_top">
					<div class="banner">
						<a>
							<img src="http://img1.yaoking.cn//4f/17/8c/090cff822c911a18ab1332e1d8afd679e77.png?1498211202#w">
						</a>
					</div>
				</div>
				<div class="qiangh_right_top">
					<div class="banner">
						<a>
							<img src="http://img1.yaoking.cn//d5/e0/87/4a300dedbbc7144f9a5cf5104876e9abf53.png?1478140735#w">
						</a>
					</div>
				</div>
			</div>
		</div>
		<div class="flzj">
			<ul>
				<li>
					<a><img src="//www.yaoking.cn/wap_themes/yaoking_new/images/xnxgtp.png"></a>
				</li>
				<li>
					<a><img src="//www.yaoking.cn/wap_themes/yaoking_new/images/ygjbtp.png"></a>
				</li>
				<li>
					<a><img src="//www.yaoking.cn/wap_themes/yaoking_new/images/ywzltp.png"></a>
				</li>
			</ul>
		</div>
		<div class="salehot">————·正在热卖·————</div>
		<div class="index_topic">
			<a class="topic_pic"><img src="http://img1.yaoking.cn//a8/25/59/be19b509717ec7bf16b25f54714491d369e.jpg"></a>
			<div id="wrapper_146">
				<ul class="topic_goods">
					<li>
						<a class="pic_goods"><img src="../img/homeimg/ajiao.jpg" /></a>
						<p class="topic_name">复方阿胶浆</p>
						<p class="topic_price">498.00</p>
					</li>
					<li>
						<a class="pic_goods"><img src="../img/homeimg/ajiao.jpg" /></a>
						<p class="topic_name">鸿茅药酒 </p>
						<p class="topic_price">1498.00</p>
					</li>
					<li>
						<a class="pic_goods"><img src="../img/homeimg/ajiao.jpg" /></a>
						<p class="topic_name">复方阿胶浆</p>
						<p class="topic_price">498.00</p>
					</li>
					<li>
						<a class="pic_goods"><img src="../img/homeimg/ajiao.jpg" /></a>
						<p class="topic_name">复方阿胶浆</p>
						<p class="topic_price">498.00</p>
					</li>
				</ul>
			</div>

			<!--2-->
			<a class="topic_pic"><img src="http://img1.yaoking.cn//d1/98/26/7202e6c3a9dc7217a5afa9fcf719fa6606f.jpg"></a>
			<div id="wrapper_146">
				<ul class="topic_goods">
					<li>
						<a class="pic_goods"><img src="../img/homeimg/ajiao.jpg" /></a>
						<p class="topic_name">复方阿胶浆</p>
						<p class="topic_price">498.00</p>
					</li>
					<li>
						<a class="pic_goods"><img src="../img/homeimg/ajiao.jpg" /></a>
						<p class="topic_name">复方阿胶浆</p>
						<p class="topic_price">498.00</p>
					</li>
					<li>
						<a class="pic_goods"><img src="../img/homeimg/ajiao.jpg" /></a>
						<p class="topic_name">复方阿胶浆</p>
						<p class="topic_price">498.00</p>
					</li>
					<li>
						<a class="pic_goods"><img src="../img/homeimg/ajiao.jpg" /></a>
						<p class="topic_name">复方阿胶浆</p>
						<p class="topic_price">498.00</p>
					</li>
				</ul>
			</div>

			<!--3-->
		</div>
		<div class="salehot">————·为您推荐·————</div>

		<div class="neir_sy">
			<ul class="c-fix">

				<li class="yaoking-goods" v-for="recommendxx in recommenddata" :key="recommendxx.productCode" @click="goto('Detail',recommendxx.productCode)">
					<a>
						<div class="goods-pic">
							<img :src="'https://image.jianke.com'+recommendxx.thumbnailUri" alt="复方阿胶浆">
						</div>
						<div class="goods-name">
							<span>抢</span> {{recommendxx.productName}} </div>
						<p class="goods-price-info">
							<span class="price">￥{{((recommendxx.lowestPrice)/100).toFixed(2)}}</span>
							<del>{{((recommendxx.marketPrice)/100).toFixed(2)}}</del>
						</p>
					</a>
				</li>
			</ul>

		</div>
		<div class="member_data_foot">
			<div style="width: 186px;margin: 0px auto; height: 30px;display:none;">
				<div class="load_left" style="width: auto;">
					<a href="//www.wandoujia.com/apps/cn.yaoking" target="_blank"><img src="//www.yaoking.cn/wap_themes/yaoking_new/images/xiazai.png"></a>
				</div>
				<div class="load_right" style="width: auto;">
					<a href="//www.wandoujia.com/apps/cn.yaoking" target="_blank">下载【怡康到家】手机app</a>
				</div>
			</div>
			<div style="clear: both"></div>
			<p>怡康医药全国免费专线400-799-9120</p>
			<p>药品交易资格证：陕C20140002 ©怡康医药网上药店</p>
			<p>2001-2017版权所有</p>
		</div>
	</div>
</template>

<script>
	import { Indicator } from 'mint-ui';
	export default {
		props:['keyword'],
		data() {
			return {
				Indicator:'',
				recommenddata:[],
				indexCity:{},
				timer:null,
				result:[],
				clientHeight: "",
				recommend: [{
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
				],
				arr:[{
						title:"门店配送订单时间",
						intensive:"提示",
						hint:"09:00-21:00（21:00后订单次日09:00后配送）"
					},{
						title:"订单自提时间",
						intensive:"提示",
						hint:"怡康门店正常营业时间均可到店自提"
					},{
						title:"同仁堂阿胶",
						intensive:"御制",
						hint:"皇亲贵器同仁堂御制金装阿胶"
					},{
						title:"怡康医药“24小时药店”开通",
						intensive:"公告",
						hint:"昼夜守候，贴心服务！"
					},{
						title:"门店配送订单时间",
						intensive:"提示",
						hint:"09:00-21:00（21:00后订单次日09:00后配送）"
					}
				],
			}
		},
		methods: {
			//路由跳转
			goto(name,pcode) {
				this.$router.push({name,params:{pcode}});
			},
			gotodetail(name,id){
				this.$router.push({name,params:{id}})//跳转的时候将id带过去
			},



			changeFixed(clientHeight) { //动态修改样式
				//             console.log(clientHeight);
				this.$refs.listHeight.style.height = clientHeight - 43 + 'px';
				//             console.log(this.$refs);
			},
			search(){
				clearTimeout(this.timer);
				if(!this.keyword) return;
				this.timer=setTimeout(()=>{
				this.$axios.get("http://59.110.138.64:12345",{
					params:{
						rq:"http://www.yaoking.cn/wap/gallery-cate_ajax.html",
//					q:this.keyword
					}}).then(res=>{
				let data=res
				this.result=data.data.result
//				console.log(this.result)
				})
				},1000)
				//https://image.jianke.com
				//https://fe-wcgi.jianke.com/v1/searchs?cid=5411&pn=1&ps=10
			},
			 
		},
		created(){
				clearTimeout(this.timer);
				Indicator.open('Loading...')//loading开始
				this.timer=setTimeout(()=>{
			    this.$axios.get("http://59.110.138.64:12345",{
					params:{
						home:"https://fe-wcgi.jianke.com/v1/searchs?cid=5411&pn=1&ps=10"
					}}).then(res=>{
					let recommendd=res
					this.recommenddata=recommendd.data.products.results
					console.log(this.recommenddata)
					Indicator.close();//请求数据结束关掉loading
					
					})
				},1000)
			}

	}
</script>

<style lang="scss">
	
	.page {
		background: #f2f2f2;
		max-width: 640px;
		min-width: 320px;
		margin: 0px auto;
		margin-bottom: 43px;
		overflow: auto;
		/*这里有问题*/
		.header {
			width: 100%;
			height: 52.5px;
			background: #31c27c;
			position:fixed;
			z-index:100;
			top:0px;
			max-width: 640px;
			min-width: 320px;
			margin: 0px auto;
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
			margin-top:8px;
			overflow: auto;
		    bottom: 0;
		    left:14% ;
		    position: absolute;
		    height:200px;
		    width: 68%;
		    text-align: center;
		    opacity: 0.9;
		}
		.mint-swipe {
			max-height: 239.06px;
			margin-bottom: 4px;
			margin-top:52.5px ;
			.mint-swipe-items-wrap {
				overflow: initial;
				min-height: 27vh;
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
					text-overflow: ellipsis;
					white-space: nowrap;
					width: 100%;
					font-size: 12px;
					height: 60px;
					overflow: hidden;
					margin-top: 0px;
					
					a {
						animation: myMove 8s linear infinite;
  						animation-fill-mode: forwards;
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
		.fenl_sy {
			overflow: hidden;
			width: 100%;
			max-width: 640px;
			min-width: 320px;
			margin: 0px auto;
			margin-bottom: 7px;
			box-shadow: 0px 2px 5px #dfe4e2;
			ul {
				li {
					width: 25%;
					height: auto;
					margin: 0px auto;
					float: left;
					text-align: center;
					padding-top: 13px;
					background: #fff;
					div {
						width: 100%;
						height: auto;
						img {
							width: 62%;
							height: auto;
							margin: 0px auto;
							max-height: 60px;
							max-width: 60px;
						}
					}
					p {
						line-height: 30px;
						color: #323232;
						font-size: 14px;
						padding-bottom: 10px;
					}
				}
			}
		}
		.more {
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
				img {
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
			.index_topic {
				width: 100%;
				height: auto;
				overflow: hidden;
				ul {
					height: 135px;
					overflow: hidden;
					li {
						width: 24%;
						height: 135px;
						float: left;
						margin-left: 3px;
						a {
							width: 95%;
							height: 90px;
							text-align: center;
							line-height: 90px;
							display: block;
							img {
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
		.qiangh_sy {
			width: 100%;
			margin: 0px auto;
			margin-top: 7px;
			background: #fff;
			overflow: hidden;
			.qiangh_left {
				width: 40%;
				height: auto;
				float: left;
				background: #fff;
				height: 220px;
				a {
					height: 220px;
					width: 100%;
					line-height: 220px;
					display: block;
					img {
						width: 100%;
						max-width: 100%;
						max-height: 99%;
						vertical-align: middle;
						display: inline;
						margin-top: 7px;
					}
				}
			}
			/*right*/
			.qiangh_right {
				width: 59.6%;
				float: left;
				border-left: 1px solid #dddddd;
				height: 220px;
				background: #FFF;
				.qiangh_right_top {
					border-bottom: 1px solid #dddddd;
					text-align: center;
					height: 111px;
					max-height: 129px;
					max-width: 420px;
					margin: 0 auto;
					a {
						width: 100%;
						height: 111px;
						line-height: 111px;
						display: block;
						img {
							width: 84%;
							height: auto;
							max-height: 99px;
							max-width: 222px;
							display: inline;
							vertical-align: middle;
							margin-bottom: 1px;
							margin-top: 4px;
						}
					}
				}
				.qiangh_right_bottom {
					height: 109px;
					width: 100%;
					li:nth-child(1) {
						margin-right: 1px;
						border-right: 1px solid #dddddd;
					}
					ul {
						width: 100%;
						li {
							float: left;
							width: 49%;
							text-align: center;
							line-height: 109px;
							img {
								width: 87%;
								height: auto;
								max-width: 114px;
								max-height: 99%;
								vertical-align: middle;
								display: inline;
							}
						}
					}
				}
			}
		}
		.sellhot {
			width: 100%;
			height: auto;
			background: #fff;
			margin-top: 7px;
			img {
				width: 100%;
				height: auto;
			}
		}
		.hotsale {
			margin-bottom: 3px;
			overflow: hidden;
			ul {
				li {
					width: 25%;
					float: left;
					background: #fff;
					padding-bottom: 5px;
					.goods-pic {
						text-align: center;
						height: 85px;
						img {
							width: auto;
							margin: 0px auto;
							height: 80px;
							max-width: 100%;
						}
					}
					.goods-price-info {
						.price {
							margin-left: 0px;
							text-align: center;
							font-size: 14px;
							width: 100%;
							text-align: center;
							display: block;
							color: red;
						}
						del {
							font-size: 12px;
							width: 100%;
							text-align: center;
							display: block;
						}
					}
				}
			}
		}
		.ggzj {
			width: 100%;
			height: auto;
			margin: 0px auto;
			max-width: 100%;
			img {
				width: 100%;
				height: auto;
				margin: 0px auto;
			}
		}
		.qiangh_sy {
			.qiangh_left {
				width: 40%;
				height: auto;
				float: left;
				background: #fff;
				height: 220px;
				text-align: center;
				vertical-align: middle;
				img {
					width: 100%;
					max-width: 100%;
					max-height: 99%;
					display: inline;
					margin-top: 7px;
				}
			}
		}
		.flzj {
			border-top: 1px solid #F0F0F0;
			overflow: hidden;
			ul {
				width: 100%;
				height: auto;
				margin: 0px auto;
				overflow: hidden;
				background: #fff;
				li {
					width: 32.1%;
					height: auto;
					max-height: 197px;
					float: left;
					background: #fff;
					border-right: 1px solid #F0F0F0;
					a {
						width: 100%;
						height: auto;
						display: block;
						img {
							width: 100%;
							height: auto;
							max-height: 197px;
						}
					}
				}
			}
		}
		.salehot {
			width: 100%;
			height: 30px;
			text-align: center;
			line-height: 30px;
			font-size: 14px;
		}
		.index_topic {
			width: 100%;
			height: auto;
			.topic_pic {
				width: 100%;
				height: auto;
				margin: 5px auto;
				display: block;
				img {
					width: 100%;
					height: auto;
				}
			}
			#wrapper_146 {
				.topic_goods {
					width: auto;
					height: 135px;
					overflow: hidden;
					li {
						width: 100px;
						height: 135px;
						float: left;
						margin-left: 6px;
						.pic_goods {
							width: 95%;
							height: 90px;
							text-align: center;
							line-height: 90px;
							display: block;
							img {
								max-height: 90%;
								display: inline;
								vertical-align: middle
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
		.salehot {
			width: 100%;
			height: 30px;
			text-align: center;
			line-height: 30px;
			font-size: 14px;
		}
		.neir_sy {
			width: 100%;
			margin: 0px auto;
			height: auto;
			margin-bottom: 7px;
			box-shadow: 0px 2px 5px #dfe4e2;
			.c-fix li:nth-child(odd) {
				margin-right: 1.6%;
			}
			.c-fix {
				height: auto;
				width: 100%;
				display: block;
				overflow: hidden;
				li {
					width: 49.2%;
					height: auto;
					background: #fff;
					float: left;
					margin-top: 7px;
					padding-bottom: 15px;
					box-shadow: 0px 2px 5px #dfe4e2;
					a {
						.goods-pic {
							width: 75%;
							height: 160px;
							margin: 0px auto;
							margin-top: 15px;
							text-align: center;
							img {
								width: 100%;
								height: auto;
								max-width: 160px;
								max-height: 160px;
							}
						}
						.goods-name {
							width: 90%;
							line-height: 30px;
							font-size: 15px;
							height: 60px;
							overflow: hidden;
							color: #454545;
							font-weight: lighter;
							margin: 0px auto;
						}
						.goods-price-info {
							.price {
								margin-left: 15px;
								font-size: 16px;
								color: red;
							}
							del {
								line-height: 23px;
								text-decoration: line-through;
								color: #333;
							}
						}
					}
				}
			}
		}
		.member_data_foot {
			width: 100%;
			margin: 0px auto;
			padding: 30px 0px;
			padding-bottom: 30px;
			p {
				width: 100%;
				margin: 0px auto;
				height: 30px;
				line-height: 30px;
				text-align: center;
				font-size: 13px;
				color: #a4a4a4;
			}
		}
	}
@keyframes myMove{
  0% {
    transform: translateY(0);
  }
  12.5% {
    transform: translateY(-60px);
  }
  25% {
    transform: translateY(-60px);
  }
  37.5% {
    transform: translateY(-120px);
  }
  50% {
    transform: translateY(-120px);
  }
  62.5% {
    transform: translateY(-180px);
  }
  75% {
    transform: translateY(-180px);
  }
  87.5% {
    transform: translateY(-240px);
  }
  100% {
    transform: translateY(-240px);
  }
}


</style>