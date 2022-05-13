<template>
  <!-- eslint-disable -->
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/about">About</RouterLink>
  <RouterView />
  <!-- eslint-enable -->
</template>

<script>

export default {
  data() {
    return {
      msg: 'Hello Vue!'
    };
  }
};
</script>