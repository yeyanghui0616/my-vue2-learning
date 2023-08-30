<template>
  <div>
    <slotComponent>
      <h1>我是插槽的替换内容</h1>
      <h2 slot="top">我是上面</h2>
      
    </slotComponent>
  </div>
</template>

<script>
// @ts-ignore
import slotComponent from "@/components/slotComponent.vue";
export default {
  components: {
    slotComponent,
  },
  data() {
    return {};
  },

  methods: {},
};
</script>

<style lang="scss"></style>
