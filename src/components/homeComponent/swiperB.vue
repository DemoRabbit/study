<template>
	<div class="swiperB">
		<swiper :options="swiperOption" v-if="slideImages.length>1">
		    <swiper-slide v-for="(item,index) in slideImages" :key="key"> <!-- :key 是为了更高效的更新虚拟DOM   vue和react都有一个Diff算法 -->
		        <!-- <a href="#" target="_blank"><img :src="item.imageUrl" /><span class="title">{{item.title}}</span></a> -->
				<div class="proJBox">
					<div v-for="(item,index) in item.imageUrl" :key="key" class="proJ">
						<a href="#"><img :src="item.imgUrl" /><span class="title">{{item.title}}</span></a>
					</div>
				</div>
		    </swiper-slide>
		    <div class="swiper-pagination swiper-pagination-bullets" slot="pagination" ></div>
		</swiper>
	</div>
</template>

<script>
	import 'swiper/dist/css/swiper.css'
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	export default {
		name:"swiperB",
		components:{
		　　swiper,
			swiperSlide,
		},
		data(){
			return {
				swiperOption: {
					pagination: {//分页
						el: '.swiper-pagination',
						clickable: true,
						renderBullet(index, className) {//自定义分页的按钮
						  return `<span class="${className} swiper-pagination-bullet-custom"></span>`   //swiper中的  `` 而不是引号''
						}
					}
				},
				slideImages: [
					{
						title: "",
						imageUrl:[
							{
								title:"美食",
								imgUrl: "https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
							},
							{
								title:"商超便利",
								imgUrl: "https://fuss10.elemecdn.com/c/7e/76a23eb90dada42528bc41499d6f8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
							},
							{
								title:"水果",
								imgUrl: "https://fuss10.elemecdn.com/0/d0/dd7c960f08cdc756b1d3ad54978fdjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
							},
							{
								title:"医药保健",
								imgUrl: "https://fuss10.elemecdn.com/7/0a/af108e256ebc9f02db599592ae655jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
							},
							{
								title:"浪漫鲜花",
								imgUrl: "https://fuss10.elemecdn.com/3/01/c888acb2c8ba9e0c813f36ec9e90ajpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
							},
							{
								title:"跑腿代购",
								imgUrl: "https://fuss10.elemecdn.com/e/58/bceb19258e3264e64fb856722c3c1jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
							},
							{
								title:"汉堡披萨",
								imgUrl: "https://fuss10.elemecdn.com/b/7f/432619fb21a40b05cd25d11eca02djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
							},
							{
								title:"厨房生鲜",
								imgUrl: "https://fuss10.elemecdn.com/c/21/e42997b86b232161a5a16ab813ae8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
							},
							{
								title:"炸鸡炸串",
								imgUrl: "https://fuss10.elemecdn.com/a/78/0fb469b2da210827ec16896e00420jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
							},
							{
								title:"地方菜系",
								imgUrl: "https://fuss10.elemecdn.com/a/8a/ec21096d528b7cfd23cdd894f01c6jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
							}
						]
					},
					{
						title: "",
						imageUrl:[
							{
								title:"麻辣烫",
								imgUrl: "https://fuss10.elemecdn.com/e/c7/b7ba9547aa700bd20d0420e1794a8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
							},
							{
								title:"速食简餐",
								imgUrl: "https://fuss10.elemecdn.com/0/1a/314b6da88ab6c7ae9828f91652d40jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
							},
							{
								title:"地方小吃",
								imgUrl: "https://fuss10.elemecdn.com/7/d6/6f2631288a44ec177204e05cbcb93jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
							},
							{
								title:"大牌惠吃",
								imgUrl: "https://fuss10.elemecdn.com/a/7b/b02bd836411c016935d258b300cfejpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
							},
							{
								title:"米粉面馆",
								imgUrl: "https://fuss10.elemecdn.com/e/89/185f7259ebda19e16123884a60ef2jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
							},
							{
								title:"包子粥铺",
								imgUrl: "https://fuss10.elemecdn.com/5/1a/dc885d2ce022d2ee60495acafb795jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
							},
							{
								title:"速食简餐",
								imgUrl: "https://fuss10.elemecdn.com/d/38/7bddb07503aea4b711236348e2632jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
							}
						]
					}
				]
			}
		}
	}
</script>

<style scoped="scoped">
	.proJBox {
		padding: 0.4rem 0 1rem 0;
	}
	.proJ {
		position: relative;
		padding-bottom: 0.4rem;
		float: left;
		width: 20%;
	}
	.proJBox:after {
		content: "";
		display: block;
		clear: both;
	}
	.proJ img {
		position: relative;
		margin: 0 auto;
		display: block;
		width: 60%;
		top: 0.1rem;
	}
	.proJ a {
		display: block;
	}
	.proJ span {
		position: relative;
		display: block;
		font-size: 0.33rem;
		height: 0.5rem;
		line-height: 0.5rem;
		padding-top: 0.3rem;
	}
	.swiper-pagination {
		position: absolute;
		height: 1rem;
	}
	
</style>
