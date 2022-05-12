<template>
  <h1>설문조사</h1>
  <component
    :is="field.component"
    v-for="field in fields"
    :key="'component- ' + field.title" 
    v-model="field.value"
    :title="field.title"
    :items="field.items" />

  <h1>결과</h1>
  <div
    v-for="field in fields"
    :key="'result- ' + field.title">
    {{ field.value }}
  </div>
</template>

<script>
import TextField from '~/components/fields/TextField';
import SimpleRadio from '~/components/fields/SimpleRadio';

export default {
  components: {
    TextField,
    SimpleRadio
  },
  data() {
    return {
      fields: [
        {
          component: 'TextField',
          title: '이름',
          value: ''
        },
        {
          component: 'SimpleRadio',
          title: '나이대',
          value: '',
          items: ['20대', '30대', '40대', '50대']
        }
      ]
    };
  },
};
</script>