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
		path: "/v-html",
		name: "v-html",
		component: () => import("../views/v-html.vue"),
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
