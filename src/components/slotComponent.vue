<template>
  <div>
    <slot>我是插槽的默认内容</slot>
    <slot name="top">我是上面</slot>
    <slot name="bottom">我是下面</slot>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {},
};
</script>

<style lang="scss"></style>
