<template>
	<div class="myHome">
		<!-- <h1 class="homeNav">首页</h1> -->
		<header class="index-JMUSj_0">
			<div>
				<span>请选择地址</span>
			</div>
		</header>
		<div class="search">
			<input type="search" desc="搜索商家商品" placeholder="点击搜索商家商品"/>
		</div>
		<swiperB></swiperB>
		<commondites></commondites>
		<swiperA></swiperA>
	</div>

</template>

<script>
	import swiperA from "./homeComponent/swiperA.vue"
	import commondites from "./homeComponent/commondites.vue"
	import swiperB from "./homeComponent/swiperB.vue"
	export default {
		name: 'home',
		components:{
			swiperA,
			swiperB,
			commondites,
		}
	}
</script>

<style scoped="scoped">
	.index-JMUSj_0 {
		width: 100%;
		height: 1.8rem;
	}
	.index-JMUSj_0 div {
		position: relative;
		width: 93%;
		height: 1.3rem;
		top: 0.5rem;
		margin: 0 auto;
	}
	.index-JMUSj_0 div span {
		display: block;
		color: white;
		width: 100%;
		height: 100%;
		line-height: 1.3rem;
		text-align: left;
		font-size: 0.7166rem;
		font-weight: 600;
	}
	.search {
		position: relative;
		width: 100%;
		height: 2rem;
	}
	.search input {
		position: absolute;
		margin: auto;
		width: 93%;
		height: 1.5rem;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		font-size: 0.566rem;
		/* text-indent: 1rem; */
		color: #666;
		outline: orangered;
		text-align: center;
		letter-spacing: 0.05rem;
	}
	.myHome {
		position: relative;
		width: 100%;
		height: 3.8rem;
		background-image: linear-gradient(90deg,#0af,#0085ff);
		background-image: -webkit-linear-gradient(90deg,#0af,#0085ff);
		background-image: -moz-linear-gradient(90deg,#0af,#0085ff);
		background-image: -o-linear-gradient(90deg,#0af,#0085ff);
	}
	.homeNav {
		transform: all 1s;
		-webkit-transform: all 1s;
		-moz-transform: all 1s;
		-ms-transform: all 1s;
		animation: step 1s infinite;
		font-size: 1rem;
	}

	@-ms-keyframes step {
		from {
			color: #42B983;
		}

		to {
			color: antiquewhite;
		}
	}

	@-webkit-keyframes step {
		from {
			color: #42B983;
		}

		to {
			color: antiquewhite;
		}
	}

	@-moz-keyframes step {
		from {
			color: #42B983;
		}

		to {
			color: antiquewhite;
		}
	}

	@-o-keyframes step {
		from {
			color: #42B983;
		}

		to {
			color: antiquewhite;
		}
	}
</style>
