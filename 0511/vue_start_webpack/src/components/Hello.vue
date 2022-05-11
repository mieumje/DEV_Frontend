<template>
  <h1>hello</h1>
  <slot :hello="123"></slot>
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