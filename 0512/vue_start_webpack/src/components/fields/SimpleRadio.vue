<template>
  <div>
    <h3>{{ title }}</h3>
    <ul>
      <li
        v-for="item in items"
        :key="item">
        <!-- eslint-disable -->
        <label>
          <input
            type="radio"
            :value="item"
            :name="title"
            @input="$emit('update:modelValue', $event.target.value)">
          {{ item }}
        </label>
        <!-- eslint-enable -->
      </li>
    </ul>
  </div>
</template>

<script>
import fieldMixin from './mixin';
export default {
  mixins: [fieldMixin]
};
</script>