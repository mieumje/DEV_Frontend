<template>
  <div>
    <h1>{{ id }} / {{ title }} / {{ email }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
    title: String,
    email: {
      type: String,
      default: 'mieumje@kakao.com'
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