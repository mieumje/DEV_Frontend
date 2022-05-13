<template>
  <!-- eslint-disable -->
  <h1>Hello.vue</h1>
  <div>
    {{ msg }}
  </div>
  <div @click="increaseCount">
    {{ count }}
  </div>
  <button @click="fetchTodo">Get todo</button>
</template>

<script>
import { state, mutations, actions } from '~/store/index';

export default {
  data() {
    return state;
  },
  methods: {
    increaseCount: mutations.increaseCount,
    fetchTodo: actions.fetchTodo
  } 
};
</script>

<style scoped lang="scss">
$color: skyblue;
h1 {
  color: $color;
}
</style>