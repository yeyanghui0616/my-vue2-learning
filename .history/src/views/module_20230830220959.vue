<template>
  <div>前端模块化</div>
</template>

<script>
import add from "@/utils/math.js";
export default {
  data() {
    return {};
  },
  mounted() {
    console.log("add", add(1, 2));
  },
  methods: {},
};
</script>

<style lang="scss"></style>
