<template>
  <div>{{ $route.params.id }}</div>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {},
  mounted() {
    console.log(this.$route);
    console.log(this.$route.path);
  },
};
</script>

<style lang="scss"></style>
