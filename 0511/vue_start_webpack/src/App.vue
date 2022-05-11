<template>
  <h1>{{ msg }}</h1>
  <Hello>
    <template #default="slotProps">
      <h2>{{ slotProps.hello }}</h2>
    </template>
    <template #abc>
      <h2>ABC</h2>
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