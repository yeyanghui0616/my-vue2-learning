<template>
	<div>
		<h2>Hello {{ name }}</h2>
		<h2>{{firstName}} {{ name }}</h2>
	</div>
</template>

<script>
export default {
	data() {
		return {
			name: "Mustache",

		};
	},

	methods: {},
};
</script>

<style lang="scss"></style>
