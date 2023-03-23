<template>
  <!--eslint-disable-->
  <h1>Parent</h1>
  <Child />
</template>

<script>
import Child from '~/components/Child';

export default {
  components: {
    Child
  }
};
</script>

<style scoped lang="scss">
$color: skyblue;
h1 {
  color: $color;
}
</style>