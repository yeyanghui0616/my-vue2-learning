<template>
  <div>
    <slotComponent>
      <h1>我是插槽的内容</h1>
      <h2>我是插槽的内容</h2>
      <h3>我是插槽的内容</h3>
    </slotComponent>
  </div>
</template>

<script>
// @ts-ignore
import slotComponent from "@/components/slotComponent.vue";
export default {
  data() {
    return {};
  },

  methods: {},
};
</script>

<style lang="scss"></style>
