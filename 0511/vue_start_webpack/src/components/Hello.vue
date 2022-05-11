<template>
  <slot name="abc"></slot>
  <h1>hello</h1>
  <slot name="xyz"></slot>
</template>

<script>
export default {
  
};
</script>

<style scoped lang="scss">
$color: skyblue;
h1 {
  color: $color;
}
</style>