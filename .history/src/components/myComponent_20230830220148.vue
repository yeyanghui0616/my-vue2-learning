<template>
  <div>
    <h1>这里是局部组件</h1>
    <h2>我的名字是：{{ name }}</h2>
    <button>修改名字</button>
  </div>
</template>

<script>
export default {
  //   props: {
  //     name: {
  //       type: String,
  //       default: "默认名字",
  //     },
  //   },
  props: ["name"],
  data() {
    return {};
  },

  methods: {},
};
</script>

<style lang="scss"></style>
