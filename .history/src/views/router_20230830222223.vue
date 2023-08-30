<template>
  <div>
    <h1>vue-router</h1>
    <button @click="jumpModulePage">跳转到module页面</button>
    <button @click="jumpModulePage2">动态路由</button>
    <button @click="jumpModulePage3">跳转到module页面，并携带参数</button>
  </div>
  <!-- 
    $route和$router是有区别的
      $router为VueRouter实例，想要导航到不同URL，则使用$router.push方法
      $route为当前router跳转对象里面可以获取name、path、query、params等 
  -->
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
      this.$router.push("/router2/123");
    },
    jumpModulePage3() {
      this.$router.push("/router2/123");
    },
  },
};
</script>

<style lang="scss"></style>
