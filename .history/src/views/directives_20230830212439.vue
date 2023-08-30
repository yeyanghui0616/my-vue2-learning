<template>
	<div>
		<!-- TODO Mustache -->
		<h2>Hello {{ name }}</h2>
		<h2>{{ firstName }} {{ lastName }}</h2>
		<h2>{{ counter * 2 }}</h2>
		<!-- TODO v-html -->
		<h2>{{ link }}</h2>
		<h2 v-html="link"></h2>
		<!-- TODO v-text, 和mustache一样 -->
		<h2>{{ message }}</h2>
		<h2 v-text="message"></h2>
		<!-- TODO v-pre -->
		<h2>{{ pre }}</h2>
		<h2 v-pre>{{ pre }}</h2>
		<!-- TODO v-bind -->
		<!-- 用于动态绑定元素 -->
		<a v-bind:href="linkUrl">百度一下</a>
		<img v-bind:src="logoUrl" />
    <!-- 语法糖（简写） -->
    <a v-bind:href="linkUrl">百度一下</a>
		<img :src="logoUrl" />
	</div>
</template>

<script>
export default {
	data() {
		return {
			name: "Mustache",
			firstName: "John",
			lastName: "Doe",
			counter: 12,
			link: '<a href="https://www.baidu.com">百度一下</a>',
			message: "<h2>hello world</h2>",
			pre: "hello world",
			linkUrl: "https://www.baidu.com",
			logoUrl: "https://www.baidu.com/img/bd_logo1.png?where=super",
		};
	},

	methods: {},
};
</script>

<style lang="scss"></style>
