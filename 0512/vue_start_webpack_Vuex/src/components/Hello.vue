<template>
  <!-- eslint-disable -->
  <h1>Hello.vue</h1>
  <div>{{ count }}</div>
  <button @click="$store.commit('count/increaseCount')">+</button>
  <button @click="$store.commit('count/decreaseCount')">-</button>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  computed: {
    count() {
      return this.$store.state.count.count;
    }
  }
};
</script>

<style scoped lang="scss">
$color: skyblue;
h1 {
  color: $color;
}
</style>