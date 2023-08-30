import Vue from "vue";
import VueRouter from "vue-router";
import Mustache from "../views/Mustache.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Mustache",
		component: Mustache,
	},
	{
		path: "/directives",
		name: "directives",
		component: () => import("../views/directives.vue"),
	},
	{
		path: "/component",
		name: "component",
		component: () => import("../views/component.vue"),
	},
	{
		path: "/slot",
		name: "slot",
		component: () => import("../views/slot.vue"),
	},
	{
		path: "/module",
		name: "module",
		component: () => import("../views/module.vue"),
	},
	{
		path: "/router",
		name: "router",
		component: () => import("../views/router.vue"),
	},
	{
		path: "/router2/:id",
		name: "router2",
		component: () => import("../views/router2.vue"),
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

// 路由守卫
// 1.全局前置守卫
router.beforeEach((to, from, next) => {
	console.log("beforeEach");
	next();
});

// 2.全局解析守卫
router.beforeResolve((to, from, next) => {
	console.log("beforeResolve");
	next();
});

// 3.全局后置钩子
router.afterEach((to, from) => {
	console.log("afterEach");
});

export default router;
