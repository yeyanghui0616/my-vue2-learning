<template>
  <div>
    <slot>我是插槽的默认内容</slot>
    <slot name="test">我是插槽的默认内容</slot>
    <slot name="test">我是插槽的默认内容</slot>
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
