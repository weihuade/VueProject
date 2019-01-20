<template>
<div class="gray-bg">
	<div class="all-page">
		<div class="banner">
		  	<a>
		    <img src="http://img1.yaoking.cn//f1/a3/1b/d342036f85a29c471686ebccd6af47b918f.jpg?1546659074#w" alt="">
		  </a>
		</div>
		<div class="section">
			<div class="banner">
			  <a>
			    <img src="http://img1.yaoking.cn//91/40/0c/9d0fae4e7a1595c1db4b1c3784638034ca2.jpg?1546659094#w" alt="">
			  </a>
			</div>
			
			<div class="section-goods-list1">
				<ul>
					<!--1-->
								<li class="yaoking-goods">
			            <a href="/wap/product-319146.html">
			                <div class="goods-pic">
			                <img src="http://img1.yaoking.cn//66/a0/fb/d5f086d4dfe117f65ef01a1eb7a58ec79a1.jpg@170w_170h?1534751709#h" alt="盐酸二甲双胍片">
			                </div>
			                <div class="goods-name">
			                    <span>抢</span>
			                    盐酸二甲双胍片                </div>
			                <p class="goods-price-info">
			                    <span class="price">￥19.80</span>
			                    <del>19.800</del>
			                </p>
			            </a>
			            </li>
            	<!--2-->
		            		<li class="yaoking-goods">
		            <a href="/wap/product-318223.html">
		                <div class="goods-pic">
		                <img src="http://img1.yaoking.cn//7f/31/0f/24e4ffe8e285a9b36d23fdf1c2d6be8ecc9.jpg@170w_170h?1526886793#h" alt="安宫牛黄丸">
		                </div>
		                <div class="goods-name">
		                    <span>抢</span>
		                    安宫牛黄丸                </div>
		                <p class="goods-price-info">
		                    <span class="price">￥396.00</span>
		                    <del>396.000</del>
		                </p>
		            </a>
		            </li>
            <!--3-->
		            <li class="yaoking-goods">
		            <a href="/wap/product-318220.html">
		                <div class="goods-pic">
		                <img src="http://img1.yaoking.cn//4a/e7/fa/b85025ac732028b3d21d386848775d5c6e5.jpg@170w_170h?1538990350#h" alt="穿心莲内酯滴丸(天士力)">
		                </div>
		                <div class="goods-name">
		                    <span>抢</span>
		                    穿心莲内酯滴丸(天士力)                </div>
		                <p class="goods-price-info">
		                    <span class="price">￥29.80</span>
		                    <del>29.800</del>
		                </p>
		            </a>
		            </li>
		            <!--4-->
		            <li class="yaoking-goods">
            <a href="/wap/product-315368.html">
                <div class="goods-pic">
                <img src="http://img1.yaoking.cn//ef/21/68/bcd8e4ffc15f51d16bd5842fb9dd7b1cb35.jpg@170w_170h?1487293486#h" alt="穿心莲内酯滴丸">
                </div>
                <div class="goods-name">
                    <span>抢</span>
                    穿心莲内酯滴丸                </div>
                <p class="goods-price-info">
                    <span class="price">￥36.00</span>
                    <del>36.000</del>
                </p>
            </a>
            </li>
				</ul>
			</div>
		</div>
		
	</div>
</div>
</template>

<script type="text/javascript">
	export default{
		data(){
			return{

		}
	},
	created(){
			console.log(this.$route.params)
			//路由传参 ；缺点：获取繁琐
//			this.keyword=this.$route.params.keyword
//			this.keyword=this.$route.query.keyword//刷新都不会消失所以看需求来选择
		}
		
}
</script>
<style lang="scss">
	.gray-bg{
		background: #F5F5F5;
		.all-page{
			max-width: 620px;
    		margin: 0 auto;
    		.banner{
    			line-height: 1.5;
    			a{
    				color: #333;
    				text-decoration: none;
    				img{
    					width: 100%;
    				}
    			}
    		}
    		.section{
    			border-bottom: none;
    			padding: 0 0 10px 0;
    			.section-goods-list1{
    				background: #fff;
    				ul{
    					
    					.yaoking-goods:nth-child(odd) {
							    margin-left: -1px;
							    border-right: 1px solid #d6d6d6;
							}
    					.yaoking-goods{
    						width: 50%;
						    float: left;
						    padding-bottom: 10px;
						    padding-top: 10px;
						    border-top: 1px solid #d6d6d6;
						    a{
						    	width: 100%;
							    height: 100%;
							    display: block;
							    color: #333;
    							text-decoration: none;
    							.goods-pic{
    								    height: 130px;
									    width: 100%;
									    text-align: center;
									    img{
									    	max-width: 130px;
									    	width: 100%;
									    }
    							}
    							.goods-name{
    								line-height: 1.5em;
								    height: 3em;
								    overflow: hidden;
								    padding: 0 10px;
								    font-family: "Microsoft YaHei";
    								font-size: 12px;
    								span{
    									padding: 1px 2px;
									    background: #f00;
									    font-size: 14px;
									    color: #fff;
									    font-weight: bold;
									    font-family: "Microsoft yahei";
    								}
    							}
    							.goods-price-info{
    								padding: 0 10px;
    								.price {
									    width: 100%;
									    text-align: left;
									    padding: 10px 0;
									    font-family: "Microsoft yahei";
									    color: red;
									}
									del{
										color: #aeaeae;
									    margin-left: 10px;
									    font-size: 12px;
									}
    							}
						    }
    					}
    				}
    			}
    		}
    		
		}
	}
</style>