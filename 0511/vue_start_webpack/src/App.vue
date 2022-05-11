<template>
  <div>
    <Hello v-bind="post" />
  </div>
</template>


<script>
import Hello from '~/components/Hello';
export default {
  components: {
    Hello
  },
  data() {
    return {
      post: {
        id: 2,
        title: 'Hello Vue!'
      }
    };
  }
};
</script>