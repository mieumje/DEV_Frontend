<template>
  <button @click="currentComponent = 'Hello'">
    Hello!
  </button>
  <button @click="currentComponent = 'World'">
    World!
  </button>
  <keep-alive>
    <component :is="currentComponent" />
  </keep-alive>
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