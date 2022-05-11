<template>
  <h1 @click="slotName = 'abc'">
    {{ msg }}
  </h1>
  <Hello>
    <template #default="slotProps">
      <h2>{{ slotProps.hello }}</h2>
    </template>
    <template #[slotName]>
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
      slotName: 'xyz'
    };
  }
};
</script>