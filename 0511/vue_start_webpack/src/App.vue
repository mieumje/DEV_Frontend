<template>
  <h1 @click="currentComponent = 'World'">
    {{ msg }}
  </h1>
  <component :is="currentComponent" />
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
      currentComponent: 'Hello'
    };
  }
};
</script>