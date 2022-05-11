<template>
  <div>
    <!-- emit의 두 번째 인자로 데이터를 전송할 수 있다. -->
    <h1 @click="$emit('please', 2)">
      A
    </h1>
    <h1 @click="$emit('click')">
      B
    </h1>
  </div>
</template>

<script>
export default {
  emits: {
    click: null,  // 별도의 이벤트 검사가 필요 없다 -> null
    please: (number) => { // emit()의 두 번째 값을 받아온다.
      if (number > 10) {
        return true;
      } else {
        console.error('number is not greater than ten');
        return false;
      }
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