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
    console.log(this.$route.query);
    console.log(this.$route.params);
  },
};
</script>

<style lang="scss"></style>
