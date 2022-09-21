<template>
  <input
      :type="typeProps"
      :placeholder="placeholderProps"
      :value="modelValue"
      @input="updateInput"
  >
</template>

<script>
export default {
  name: "ui-my-input",
  props: {
    typeProps: {
      type: String,
      require: true
    },
    placeholderProps: {
      type: String,
      require: true
    },
    modelValue: [String, Number]
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>
input {
  width: 100%;
  border: 2px solid teal;
  padding: 18px 15px;
  margin-top: 15px;
}

</style>