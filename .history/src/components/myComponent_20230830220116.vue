<template>
  <div>
    <h1>这里是局部组件</h1>
    <h2>我的名字是：{{ name }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "默认名字",
    },
  },
  data() {
    return {};
  },

  methods: {},
};
</script>

<style lang="scss"></style>
