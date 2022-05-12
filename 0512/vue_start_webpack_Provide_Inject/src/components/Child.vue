<template>
  <h1>Child / {{ msg }}</h1>
</template>


<script>
export default {
  inject: ['msg']
};
</script>