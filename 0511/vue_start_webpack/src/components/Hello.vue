<template>
  <div>
    <h1>A</h1>
    <h1 @click="$emit('click')">
      B
    </h1>
  </div>
</template>

<script>
export default {
  emits: ['click']
};
</script>

<style scoped lang="scss">
$color: skyblue;
h1 {
  color: $color;
}
</style>