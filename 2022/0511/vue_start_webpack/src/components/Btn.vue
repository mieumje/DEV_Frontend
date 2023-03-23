<template>
  <button @click="log">
    <slot>MINJE</slot>
  </button>
</template>

<script>
export default {
  methods: {
    log() {
      console.log('Click!');
    }
  }
};
</script>

<style scoped lang="scss">
button {
  padding: 10px 20px;
  &:hover {
    background-color: royalblue;
    transform: scale(1.2);
  }
}
</style>