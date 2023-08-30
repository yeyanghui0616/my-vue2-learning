<template>
  <div>前端模块化</div>
</template>

<script>
import add, { subtract } from "@/utils/math.js";
export default {
  data() {
    return {};
  },
  mounted() {
    console.log("add", add2(1, 2));
    console.log("subtract", subtract(1, 2));
  },
  methods: {},
};
</script>

<style lang="scss"></style>
