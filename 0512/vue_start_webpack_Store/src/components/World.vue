<template>
  <!-- eslint-disable -->
  <h1>World.vue</h1>
  <div>
    {{ msg }}
  </div>
  <div @click="decreaseCount">
    {{ count }}
  </div>
</template>

<script>
import { state, mutations } from '~/store/index';
export default {
  data() {
    return state;
  },
  methods: {
    decreaseCount: mutations.decreaseCount
  }
};
</script>