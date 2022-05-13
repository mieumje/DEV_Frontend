<template>
  <!-- eslint-disable -->
  <Hello />
  <button @click="increaseCount">Increase</button>
  <World />
  <button @click="fetchTodo">Update MSG</button>
  <!-- eslint-enable -->
</template>

<script>
import Hello from '~/components/Hello';
import World from '~/components/World';

export default {
  components: {
    Hello,
    World
  },
  methods: {
    increaseCount() {
      this.$store.commit('increaseCount');
    },
    fetchTodo() {
      this.$store.dispatch('fetchTodo'); // actions의 메서드를 실행할 땐, dispatch를 사용한다.
    }
  }
};
</script>