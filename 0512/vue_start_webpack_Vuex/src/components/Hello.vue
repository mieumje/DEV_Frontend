<template>
  <!-- eslint-disable -->
  <h1>Hello.vue</h1>
  <div>{{ count }}</div>
  <button @click="increaseCount">+</button>
  <button @click="decreaseCount">-</button>
  <div>{{ message }} / {{ reversedMessage }}</div>
  <button @click="fetchTodo">Update Message</button>
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
    },
    message() {
      return this.$store.state.message.message;
    },
    reversedMessage() {
      return this.$store.getters['message/reversedMessage'];
    }
  },
  methods: {
    increaseCount() {
      this.$store.commit('count/increaseCount');
    },
    decreaseCount() {
      this.$store.commit('count/decreaseCount');
    },
    fetchTodo() {
      this.$store.dispatch('message/fetchTodo');
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