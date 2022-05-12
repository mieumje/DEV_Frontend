<template>
  <!-- eslint-disable -->
  <Modal>
    <template #activator>
      <button>On Modal!</button>
    </template>
    <h3>App.vue</h3>
  </Modal>
  <Hello />
  <!-- eslint-enable -->
</template>

<script>
import Hello from '~/components/Hello';
import Modal from '~/components/Modal';

export default {
  components: {
    Hello,
    Modal
  },
  data() {
    return {
      msg: 'Hello vue!'
    };
  }
};
</script>