<template>
  <!-- eslint-disable -->
  <header>
    <RouterLink to="/">
      Home...
    </RouterLink>
    <RouterLink to="/about">
      About...
    </RouterLink>
  </header>
  <section>
    <RouterView />
  </section>
  <!-- eslint-enable -->
</template>

<script>
export default {

};
</script>

<style scoped lang="scss">
header {
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
}

section {
  margin-top: 80px;
}
</style>