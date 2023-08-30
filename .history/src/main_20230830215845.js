import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 注册全局组件
import globalComponent from "./components/globalComponents";
Vue.component("globalComponents", globalComponents);

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount("#app");
