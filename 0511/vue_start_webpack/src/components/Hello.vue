<template>
  <h1>{{ message }}</h1>
</template>

<script>
export default {
  props: ['message']
};
</script>

<style scoped lang="scss">
$color: skyblue;
h1 {
  color: $color;
}
</style>