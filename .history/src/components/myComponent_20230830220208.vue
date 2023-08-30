<template>
  <div>
    <h1>这里是局部组件</h1>
    <h2>我的名字是：{{ name }}</h2>
    <button @click="changeName">修改名字</button>
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

  methods: {
    changeName(){
        this.$emit('changeName', '我是子组件修改后的名字'')
    }
  },
};
</script>

<style lang="scss"></style>
