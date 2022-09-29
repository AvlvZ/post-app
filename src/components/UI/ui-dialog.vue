<template>
  <div
      class="dialog"
      v-if="show === true"
      @click="hideDialog"
  >
    <div class="dialog__content" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import toggleMixin from "@/mixins/toggleMixin";

export default {
  name: "ui-dialog",
  mixins:[toggleMixin]
}
</script>

<style scoped>
.dialog {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
}
.dialog__content {
  background: #FFFFFF;
  border-radius: 12px;
  min-height: 50px;
  min-width: 500px;
  padding: 16px 32px;
}
</style>