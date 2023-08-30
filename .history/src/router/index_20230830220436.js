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
		name: "component",
		component: () => import("../views/component.vue"),
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
