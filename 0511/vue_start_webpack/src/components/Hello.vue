<template>
  <h1 @click="$emit('please')">
    {{ message }}
  </h1>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: ''
    }
  },
  emits: [
    'please' // emits 옵션으로 커스텀 이벤트를 등록시키지 않아도 사용은 가능하다.
    // 컴포넌트가 복잡해지고 커스텀 이벤트가 많아지면 어떤 커스텀 이벤트가 쓸 수 있는지 명확하지 않게 되니
    // 명시적으로 등록시킬 수 있다.
  ] 
};
</script>

<style scoped lang="scss">
$color: skyblue;
h1 {
  color: $color;
}
</style>