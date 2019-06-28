<template>
	<swiper :options="swiperOption" v-if="slideImages.length>1">
        <swiper-slide v-for="(item,index) in slideImages" :key="key"> <!-- :key 是为了更高效的更新虚拟DOM   vue和react都有一个Diff算法 -->
            <a href="#" target="_blank"><img :src="item.imageUrl" /><span class="title">{{item.title}}</span></a>
        </swiper-slide>
        <div class="swiper-pagination swiper-pagination-bullets" slot="pagination" ></div>
    </swiper>
</template>

<script>
	import 'swiper/dist/css/swiper.css'
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	export default {
		name:"swiperA",
		components:{
		　　swiper,
			swiperSlide,
		},
		data(){
			return {
				swiperOption: {
					autoplay: {//自动播放
						delay: 2500,
						disableOnInteraction: false
					},
					loop: true,
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
						imageUrl:"https://fuss10.elemecdn.com/7/05/bb01f6e34c18a0e12d39b7c98e6f6jpeg.jpeg?imageMogr/format/webp/thumbnail/568x/"
					},
					{
						title: "",
						imageUrl:"https://fuss10.elemecdn.com/5/e6/955bdd098effd615d144441084118jpeg.jpeg?imageMogr/format/webp/thumbnail/568x/"
					},
					{
						title: "",
						imageUrl:"https://fuss10.elemecdn.com/5/e6/955bdd098effd615d144441084118jpeg.jpeg?imageMogr/format/webp/thumbnail/568x/"
					},
					{
						title: "",
						imageUrl:"https://fuss10.elemecdn.com/5/e6/955bdd098effd615d144441084118jpeg.jpeg?imageMogr/format/webp/thumbnail/568x/"
					}
				]
			}
		}
	}
</script>

<style scoped="scoped">
	.swiper-container {
		position: relative;
		margin: 0.3rem auto;
		width: 95%;
		height: 3.6rem;
		border-radius: 0.2175rem;
	}
	.swiper-container img {
		display: block;
		width: 100%;
	}
	.swiper-pagination-bullet-custom {
    width: 9px;
    height: 9px;
    text-align: center;
    line-height: 20px;
    font-size: 12px;
    color: #000;
    opacity: 1;
    border-radius: 0;
    background: #fff;
}
.swiper-pagination-bullet-custom.swiper-pagination-bullet-active {
    color: #fff;
    background: #a11703;
}
</style>
