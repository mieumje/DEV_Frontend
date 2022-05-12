<template>
  <h1>{{ msg }}</h1>
</template>

<script>

export default {
  props: {
    msg: {
      type: String,
      default: ''
    }
  },
};
</script>

<style scoped lang="scss">
$color: skyblue;
h1 {
  color: $color;
}
</style>