<template>
	<div>
		<h2>Hello {{ name }}</h2>
		<h2>{{ firstName }} {{ lastName }}</h2>
		<h2>{{ counter * }} {{ lastName }}</h2>
	</div>
</template>

<script>
export default {
	data() {
		return {
			name: "Mustache",
			firstName: "John",
			lastName: "Doe",
		};
	},

	methods: {},
};
</script>

<style lang="scss"></style>
