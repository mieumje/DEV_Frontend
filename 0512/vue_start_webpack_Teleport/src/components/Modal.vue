<template>
  <!-- eslint-disable -->
  <div @click="onModal">
    <slot name="activator"></slot>
  </div>
  <template v-if="isShow">
    <div class="modal" @click="offModal">
      <div 
        :style="{ width: `${parseInt(width, 10)}px `}" 
        class="modal__inner" 
        @click.stop>
        <slot></slot>
      </div>
    </div>
  </template>
  <!-- eslint-enable -->
</template>

<script>
export default {
  props: {
    width: {
      type: [String, Number],
      default: 400
    }
  },
  data() {
    return {
      isShow: false
    };
  },
  methods: {
    onModal() {
      this.isShow = !this.isShow;
    },
    offModal() {
      this.isShow = !this.isShow;
    }
  }
};
</script>

<style scoped lang="scss">
.modal {
  background-color: rgba(black, .5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9;
  display: flex;
  justify-content: center;
  align-items: center;

  &__inner {
    background-color: white;
    padding: 20px;
  }
}
</style>