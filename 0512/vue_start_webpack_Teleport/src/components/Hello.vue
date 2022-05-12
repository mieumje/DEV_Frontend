<template>
  <!-- eslint-disable -->
  <Modal 
    v-model="isShow"
    closeable>
    <template #activator>
      <h1>Hello!</h1>
    </template>
    <h3>Hello.vue</h3>
    <textarea ref="editor" v-model="msg"></textarea>
    <button @click="submit">
      Submit!
    </button>
  </Modal>
  <!-- eslint-enable -->
</template>

<script>
export default {
  data() {
    return {
      msg: 'Please enter the text.',
      isShow: false
    };
  },
  watch: {
    isShow(newValue) {
      if (newValue) {
        this.$nextTick(() => {
          this.$refs.editor.focus();
        });
      }
    }
  },
  methods: {
    submit() {
      console.log(this.msg);
    }
  }
};
</script>

<style scoped lang="scss">
h1 {
  color: royalblue;
}
</style>