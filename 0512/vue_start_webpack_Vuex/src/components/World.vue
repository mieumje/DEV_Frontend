<template>
  <!-- eslint-disable -->
  <h1>Wolrd.vue</h1>
  <div>{{ reversedMsg }}</div>
</template>

<script>
export default {
  computed: {
    reversedMsg() {
      return this.$store.getters.reversedMsg;
    }
  }
};
</script>