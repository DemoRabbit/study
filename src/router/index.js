import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from "@/components/home"
import find from "@/components/find"
import order from "@/components/order"
import myInfo from "@/components/myInfo"


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
		{
			path: "/home",
			name: "home",
			component: home
		},
		{
			path: "/find",
			name: "find",
			component: find
		},
		{
			path: "/order",
			name: "order",
			component: order
		},
		{
			path: "/myInfo",
			name: "myInfo",
			component: myInfo
		}
  ]
})
