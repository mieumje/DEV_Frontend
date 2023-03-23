<template>
  <!-- eslint-disable -->
  <Hello />
  <World />
  <!-- eslint-enable -->
</template>

<script>
import Hello from '~/components/Hello';
import World from '~/components/World';

export default {
  components: {
    Hello,
    World
  }
};
</script>