<template>
  <!-- eslint-disable -->
  <div style="transform: scale(1)">
    <Modal width="300px">
      <template #activator>
        <button>On Modal!</button>
      </template>
    <h3>App.vue</h3>
    </Modal>
    <Hello />
  </div>
  <!-- eslint-enable -->
</template>

<script>
import Hello from '~/components/Hello';
// import Modal from '~/components/Modal';

export default {
  components: {
    Hello,
  },
  data() {
    return {
      msg: 'Hello vue!'
    };
  }
};
</script>