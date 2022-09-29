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
  color: #9500FF;
  border: 2px solid #9500FF;
  cursor: pointer;
}
</style>