export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    modelValue: {
      type: String,
      default: ''
    },
    items: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  emits: ['update:modelValue']
};