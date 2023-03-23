<template>
  <div v-if="!isEdit">
    {{ msg }}
    <button @click="onEdit">
      Edit
    </button>
  </div>
  <div v-else>
    <input
      ref="editor"
      v-model="msg"
      type="text"
      @keyup.enter="isEdit = false">
  </div>
</template>

<script>

export default {
  data() {
    return {
      isEdit: false,
      msg: 'Hello Vue!'
    };
  },
  methods: {
    onEdit() {
      this.isEdit = true;
      // setTimeout(() => {
      //   this.$refs.editor.focus();
      // });
      this.$nextTick(() => {
        this.$refs.editor.focus();
      });
    }
  }
};
</script>