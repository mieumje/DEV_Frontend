<template>
  <div>
    <h1>Hello Vue!</h1>
    <Btn />
    <Hello />
  </div>
</template>


<script>
import Hello from '~/components/Hello';
export default {
  components: {
    Hello
  }
};
</script>