<template>
  <div>
    <h1>{{ id }} / {{ title }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
    title: String
  }
};
</script>

<style scoped lang="scss">
$color: skyblue;
h1 {
  color: $color;
}
</style>