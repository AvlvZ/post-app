<template>
  <select :value="modelValue" @change="changeOption">
    <option value="" disabled>выберите из списка</option>
    <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
    >
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "ui-select",
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    changeOption(event) {
      this.$emit("update:modelValue", event.target.value)
    }
  }
}
</script>

<style scoped>
select {
  width: 200px;
  height: 50px;
  color: #9500FF;
  border: 2px solid #9500FF;
  padding: 0 16px;
}
</style>