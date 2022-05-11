<template>
  <h1>hello!</h1>
</template>

<script>
export default {
  created() {
    console.log('Hello created');
  },
  unmounted() {
    console.log('Hello unmounted');
  }
};
</script>

<style scoped lang="scss">
$color: skyblue;
h1 {
  color: $color;
}
</style>