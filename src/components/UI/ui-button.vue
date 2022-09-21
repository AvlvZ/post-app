<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "ui-button"
}
</script>

<style scoped>
button {
  padding: 18px 15px;
  background: none;
  color: teal;
  border: 2px solid teal;
  cursor: pointer;
}
</style>