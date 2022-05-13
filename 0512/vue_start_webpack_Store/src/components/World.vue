<template>
  <!-- eslint-disable -->
  <h1>World.vue</h1>
  <div>
    {{ reversedMsg }}
  </div>
  <div @click="decreaseCount">
    {{ count }}
  </div>
</template>

<script>
import { state, getters, mutations } from '~/store/index';
export default {
  data() {
    return state;
  },
  computed: {
    reversedMsg : getters.reversedMsg
  },
  methods: {
    decreaseCount: mutations.decreaseCount
  }
};
</script>