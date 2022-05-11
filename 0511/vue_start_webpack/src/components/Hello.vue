<template>
  <label>
    <input 
      :value="message"
      @input="$emit('update:message', $event.target.value)">
  </label>
</template>

<script>
export default {
  props: {
    message: { // v-model과 자동적으로 연결이 된다.
      type: String,
      default: ''
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