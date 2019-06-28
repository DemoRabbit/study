<template>
  <div id="app">
		<router-view></router-view>
		<foot></foot>
  </div>
</template>

<script>
import home from "./components/home.vue"
import foot from "./section/footer.vue"
export default {
  name: 'App',
	components:{
		home,
		foot,
	}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif, "Source Han Sans";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
