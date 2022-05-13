<template>
  <!-- eslint-disable -->
  <h1>Hello.vue</h1>
  <div>{{ msg }}</div>
  <div>{{ count }}</div>
</template>

<script>
export default {
  computed: {
    msg() {
      return this.$store.state.msg;
    },
    count() {
      return this.$store.state.count;
    }
  }
};
</script>

<style scoped lang="scss">
$color: skyblue;
h1 {
  color: $color;
}
</style>