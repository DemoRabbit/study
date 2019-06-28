<template>
	<div class="prom-title">
		<h3>品质推荐</h3>
		<p>搭配齐全，吃的更好</p>
		<a href="#">立即抢购></a>
		<img src="https://fuss10.elemecdn.com/e/ee/df43e7e53f6e1346c3fda0609f1d3png.png?imageMogr/format/webp/thumbnail/!282x188r/gravity/Center/crop/282x188/" />
	</div>
</template>

<script>
	export default {
		name:"commondites"
	}
</script>

<style scoped="scoped">
	.prom-title {
		position: relative;
		box-sizing: border-box;
		width: 95%;
		height: 4.5rem;
		margin: 0 auto;
		background: linear-gradient(0deg,#f4f4f4 5%,#fafafa 95%);
		background: -webkit-linear-gradient(0deg,#f4f4f4 5%,#fafafa 95%);
		background: -moz-linear-gradient(0deg,#f4f4f4 5%,#fafafa 95%);
		border-radius: 0.2175rem;
		padding: 0.5rem 0 0 1rem;
	}
	.prom-title h3 {
		position: relative;
		width: 100%;
		font-size: 0.7rem;
		text-align: left;
	}
	.prom-title p {
		font-size: 0.5rem;
		width: 100%;
		text-align: left;
		color: #666;
	}
	.prom-title a {
		display: block;
		font-size: 0.566rem;
		font-weight: 600;
		color: orangered;
		width: 100%;
		text-align: left;
		margin: 0.5rem 0;
	} 
	.prom-title img {
		position: absolute;
		display: block;
		width: 38%;
		right: 0.5rem;
		margin: auto;
		top: 0;
		bottom: 0;
	}
</style>
