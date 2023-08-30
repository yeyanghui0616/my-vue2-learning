<template>
  <div>
    <!-- 使用全局组件 -->
    <globalComponent></globalComponent>
    <!-- 使用局部组件 -->
    <myComponent></myComponent>
    <!-- 给组件传递参数 -->
    <myComponent name="aaa" @></myComponent>
  </div>
</template>

<script>
// @ts-ignore
import myComponent from "@/components/myComponent.vue";
export default {
  data() {
    return {};
  },
  components: {
    myComponent,
  },
  methods: {},
};
</script>

<style lang="scss"></style>
