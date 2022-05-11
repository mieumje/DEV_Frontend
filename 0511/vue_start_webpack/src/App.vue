<template>
  <h1>{{ msg }}</h1>
  <Hello>
    <template #abc>
      <h2>ABC</h2>
    </template>
    <template #xyz>
      <h2>XYZ</h2>
    </template>
  </Hello>
</template>

<script>
import Hello from '~/components/Hello';
export default {
  components: {
    Hello
  },
  data() {
    return {
      msg: 'Hello Vue!',
    };
  }
};
</script>