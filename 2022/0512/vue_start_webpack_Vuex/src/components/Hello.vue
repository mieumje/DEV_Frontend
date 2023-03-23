<template>
  <!-- eslint-disable -->
  <h1>Hello.vue</h1>
  <div>{{ count }}</div>
  <button @click="increaseCount">+</button>
  <button @click="decreaseCount">-</button>
  <div>{{ message }} / {{ reversedMessage }}</div>
  <button @click="fetchTodo">Update Message</button>
  <div>{{ msg }}</div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions} from 'vuex';
export default {
  computed: {
    ...mapState(['msg']), // 전역으로 등록된 state 데이터는 namespaced를 작성하지 않고 사용하면 된다.
    ...mapState('count', [  // 첫 번째 매개변수로 사용할 모듈의 namespaced를 작성, 두 번째 매개변수로 사용할 모듈의 데이터를 배열 데이터로 작성
      'count'
    ]), // mapState 함수가 실행된 결과를 전개한다.
    ...mapState('message', [
      'message'
    ]),
    ...mapGetters('message', [
      'reversedMessage'
    ])
  },
  methods: {
    ...mapMutations('count', [
      'increaseCount',
      'decreaseCount'
    ]),
    ...mapActions('message', [
      'fetchTodo'
    ])
  }
};
</script>

<style scoped lang="scss">
$color: skyblue;
h1 {
  color: $color;
}
</style>