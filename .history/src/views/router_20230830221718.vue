<template>
  <div>
    <h1>vue-router</h1>
    <button @click="jumpModulePage">跳转到module页面</button>
    <button @click="jumpModulePageAndParams">跳转到module页面，并携带参数</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {
    jumpModulePage() {
      // @ts-ignore
      this.$router.push("/module");
    },
    jumpModulePageAndParams() {
      // @ts-ignore
      this.$router.push("/module");
    },
  },
};
</script>

<style lang="scss"></style>
