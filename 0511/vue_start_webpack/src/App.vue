<template>
  <div>
    <Hello
      :id="post.id"
      :title="post.title" />
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
        id: 1,
        title: 'Hello Vue!'
      }
    };
  }
};
</script>