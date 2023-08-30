<template>
	<div>
		<!-- TODO Mustache -->
		<h2>Hello {{ name }}</h2>
		<h2>{{ firstName }} {{ lastName }}</h2>
		<h2>{{ counter * 2 }}</h2>
		<!-- TODO v-html -->
		<h2>{{ link }}</h2>
		<h2 v-html="link"></h2>
		<!-- TODO v-text, yu -->
		<h2>{{ message }}</h2>
		<h2 v-text="message"></h2>
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
		};
	},

	methods: {},
};
</script>

<style lang="scss"></style>
