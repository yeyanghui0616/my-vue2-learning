import HelloWorld from '@/components/HelloWorld.vue';
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
		<a :href="linkUrl">百度一下</a>
		<img :src="logoUrl" />
		<!-- 动态绑定class -->
		<h2 :class="{ active: isActive }">HelloWorld</h2>
		<h2 :class="{ active: isActive, font: isThin }">HelloWorld</h2>
		<h2 :class="['active']">HelloWorld</h2>
		<h2 :class="['active', 'font']">HelloWorld</h2>
		<h2
			class="letter-spacing"
			:class="['active', 'font']"
		>
			HelloWorld
		</h2>
		<!-- 动态绑定style -->
		<h2 :style="{ color: currentColor }">HelloWorld</h2>
		<h2 :style="{ color: isRed ? 'red' : 'black' }">HelloWorld</h2>
		<h2 :style="[baseStyles, overridingStyles]">HelloWorld</h2>
		<!-- TODO 计算属性 -->
		<h2>{{ fullName }}</h2>
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
			isActive: true,
			isThin: true,
			currentColor: "red",
			isRed: false,
			baseStyles: {
				color: "blue",
			},
			overridingStyles: {
				fontSize: "48px",
			},
      books: [{
        name:'《算法导论》',
        price: 100,
      }]
		};
	},
	computed: {
		fullName() {
			return this.firstName + " " + this.lastName;
		},
    totalPrice(){
      return this.books.reduce(function(preValue,book){
        return preValue + book.price * book.count
      },0)
    }
	},

	methods: {},
};
</script>

<style>
.active {
	color: red;
}
.font {
	font-weight: 400;
}
.letter-spacing {
	letter-spacing: 10px;
}
</style>
