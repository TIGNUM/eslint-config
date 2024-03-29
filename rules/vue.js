module.exports = {
  parser: 'vue-eslint-parser',
  extends: ['plugin:vue/vue3-recommended'],
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    globalThis: 'readonly'
  },
  rules: {
    'vue/attributes-order': [
      'error',
      {
        alphabetical: true
      }
    ],
    'vue/no-v-html': 0,
    'vue/multi-word-component-names': 0,
    'vue/no-setup-props-destructure': 0
  }
}
