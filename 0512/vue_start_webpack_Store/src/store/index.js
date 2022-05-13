import { reactive } from 'vue';

export const state = reactive({
  msg: 'Hello Vue?!',
  count: 1
});

export const mutations = {
  increaseCount() {
    state.count += 1;
  },
  decreaseCount() {
    state.count -= 1;
  }
};