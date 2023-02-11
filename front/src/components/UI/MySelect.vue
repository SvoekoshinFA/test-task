<template>
  <select v-model="modelValue" @change="changeOption" class="input">
    <option disabled value=''>Выберите сотрудника</option>
    <option v-for="option in options" :key="option.id" :value="option.id">{{ option.name }}</option>
  </select>
</template>

<script>
export default {
  name: 'my-select',
  props: {
    modelValue: {
      type: String
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    changeOption(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>
.input {
  border: 1px solid teal;
  padding: 10px 10px;
}
</style>
