<template>
  <!-- eslint-disable -->
  <div @click="onModal">
    <slot name="activator"></slot>
  </div>
  <teleport to='body'>
    <template v-if="isShow">
      <div class="modal" @click="offModal">
        <div 
          :style="{ width: `${parseInt(width, 10)}px `}" 
          class="modal__inner" 
          @click.stop>
          <button 
            v-if="closeable" 
            class="close"
            @click="offModal">
            x
          </button>
          <slot></slot>
        </div>
      </div>
    </template>
  </teleport>
  <!-- eslint-enable -->
</template>

<script>
export default {
  props: {
    width: {
      type: [String, Number],
      default: 400
    },
    closeable: {
      type: Boolean,
      default: false
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
    border-radius: 6px;
    box-shadow: 0 10px 10px rgba(black, .2);
    
    button.close {
      float: right;
    }
  }
}
</style>