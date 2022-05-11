<template>
  <h1
    :class="$attrs.class"
    :style="$attrs.style">
    Hello
  </h1>
  <h2 @click="$attrs.onClick">
    Haha?!
  </h2>
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