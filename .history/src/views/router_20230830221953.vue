<template>
  <div>
    <h1>vue-router</h1>
    <button @click="jumpModulePage">跳转到module页面</button>
    <button @click="jumpModulePage2">动态路由</button>
    <button @click="jumpModulePage3">跳转到module页面，并携带参数</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {
    jumpModulePage() {
      this.$router.push("/router2");
    },
    jumpModulePage2() {
      this.$router.push("/router2");
    },
  },
};
</script>

<style lang="scss"></style>
