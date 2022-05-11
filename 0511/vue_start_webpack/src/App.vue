<template>
  <h1>{{ msg }}</h1>
  <h1>{{ name }}</h1>
  <Hello
    v-model:message="msg"
    v-model:name="name" />
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
      name: 'minje'
    };
  }
};
</script>