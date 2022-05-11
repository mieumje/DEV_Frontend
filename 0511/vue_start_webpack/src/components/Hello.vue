<template>
  <label>
    <input 
      :value="message"
      @input="$emit('update:message', $event.target.value)">
  </label>
  <label>
    <input 
      :value="name"
      @input="$emit('update:name', $event.target.value)">
  </label>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: ''
    },
    name: {
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