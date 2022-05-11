<template>
  <h1>
    Hello
  </h1>
</template>

<script>
export default {
  inheritAttrs: false // props가 아닌 속성들을 상속받는 것을 한다/하지 않는다.
};
</script>

<style scoped lang="scss">
$color: skyblue;
h1 {
  color: $color;
}
</style>