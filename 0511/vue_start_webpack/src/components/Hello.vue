<template>
  <label>
    <input 
      :value="message"
      @input="$emit('update', $event.target.value)">
  </label>
</template>

<script>
export default {
  props: {
    message: {
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