<template>
  <h1 ref="hello">
    hello!
  </h1>
</template>

<script>
export default {
  mounted() {
    //const h1El = document.querySelector('#hello');
    const h1El = this.$refs.hello;
    console.log(h1El);
  }
};
</script>

<style scoped lang="scss">
$color: skyblue;
h1 {
  color: $color;
}
</style>