<template>
  <h1>World!</h1>
</template>

<script>
export default {
  created() {
    console.log('world created');
  },
  unmounted() {
    console.log('world unmounted');
  }
};
</script>