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
    <h2 class="letter-spacing" :class="['active', 'font']">HelloWorld</h2>
    <!-- 动态绑定style -->
    <h2 :style="{ color: currentColor }">HelloWorld</h2>
    <h2 :style="{ color: isRed ? 'red' : 'black' }">HelloWorld</h2>
    <h2 :style="[baseStyles, overridingStyles]">HelloWorld</h2>
    <!-- TODO 计算属性 -->
    <h2>{{ fullName }}</h2>
    <h2>{{ totalPrice }}</h2>
    <h2>{{ fullName2 }}</h2>
    <button @click="fullName2 = 'China Tower'">change fullName2</button>
    <!-- TODO v-on -->
    <button v-on:click="goChina('Go China')">中国加油1</button>
    <button @click="goChina('Go China')">中国加油2</button>
    <button @click="goChina('Go China', $event)">中国加油3</button>
    <!-- TODO v-if/v-else-if/v-else -->
    <!-- v-if后面的条件为false时，对应的元素以及其子元素不会渲染。也就是根本没有不会有对应的标签出现在DOM中 -->
    <h2 v-if="counter > 10">counter > 10</h2>
    <h2 v-else-if="counter > 5">counter > 5</h2>
    <h2 v-else>counter = 5</h2>
    <!-- TODO v-show -->
    <!-- v-show后面的条件为false时，对应的元素以及其子元素会渲染，只是display:none -->
    <h2 v-show="counter > 10">counter > 10</h2>
    <h2 v-show="counter > 5">counter > 5</h2>
    <h2 v-show="counter <= 5">counter = 5</h2>
    <!-- 
      开发中如何选择呢？
        1. 当需要在显示与隐藏之间切片很频繁时，使用v-show
        2. 当只有一次切换时，通过使用v-if
    -->
    <!-- TODO v-for -->
    <!-- 
      1. 数组
      2. 对象
      3. 数字
      4. 字符串
    -->
    <ul>
      <li v-for="(item, index) in books" :key="item.name">
        {{ item.name }} - {{ item.price }} - {{ item.count }}
      </li>
    </ul>
    <ul>
      <li v-for="(value, key, index) in books" :key="key">
        {{ key }} - {{ value }} - {{ index }}
      </li>
    </ul>
    <ul>
      <li v-for="(value, key, index) in 10" :key="key">
        {{ key }} - {{ value }} - {{ index }}
      </li>
    </ul>
    <ul>
      <li v-for="(value, key, index) in 'hello'" :key="key">
        {{ key }} - {{ value }} - {{ index }}
      </li>
    </ul>
    <!-- TODO v-model -->
    <!-- 
      1. 修饰符
        lazy修饰符：
          默认情况下，v-model默认是在input事件中同步输入框的数据的。
          也就是说，一旦有数据发生改变对应的data中的数据就会自动发生改变。
          lazy修饰符可以让数据在失去焦点或者回车时才会更新：
        number修饰符：
          默认情况下，在输入框中无论我们输入的是字母还是数字，都会被当做字符串类型进行处理。
          但是如果我们希望处理的是数字类型，那么最好直接将内容当做数字处理。
          number修饰符可以让在输入框中输入的内容自动转成数字类型：
        trim修饰符：
          如果输入的内容首尾有很多空格，通常我们希望将其去除
          trim修饰符可以过滤内容左右两边的空格
    -->
    <input type="text" v-model="name" />
    <input type="text" v-model.lazy="name" />
    <input type="text" v-model.number="counter" />
    <input type="text" v-model.trim="name" />
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
      books: [
        {
          name: "《算法导论》",
          price: 100,
          count: 1,
        },
        {
          name: "《UNIX编程艺术》",
          price: 200,
          count: 2,
        },
        {
          name: "《编程珠玑》",
          price: 300,
          count: 3,
        },
      ],
    };
  },
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName;
    },
    totalPrice() {
      return this.books.reduce(function (preValue, book) {
        return preValue + book.price * book.count;
      }, 0);
    },
    fullName2: {
      get() {
        console.log("get fullName2");
        return this.firstName + " " + this.lastName;
      },
      set(value) {
        console.log("set fullName2");
        console.log("value", value);
        const names = value.split(" ");
        this.firstName = names[0];
        this.lastName = names[1];
      },
    },
  },
  methods: {
    goChina(value, $event) {
      console.log(value);
      console.log("$event", $event);
    },

  },
  mounted(){
    // TODO let/var/const的区别
    // let声明的变量只在let命令所在的代码块内有效
    // var声明的变量在全局范围内都有效
    // const声明一个只读的常量，一旦声明，常量的值就不能改变，只在const命令所在的代码块内有效
    let name = 'China Tower'
    console.log()

  }
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
