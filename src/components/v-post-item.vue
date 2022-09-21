<template>
  <div class="post">
    <div>
      <div>
        <strong>Название:</strong> {{ post.title }}
      </div>
      <div>
        <strong>Описание:</strong> {{ post.body }}
      </div>
    </div>
    <div class="close__btn">
      <ui-button @click="$emit('remove', post)">
        Удалить
      </ui-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-post-item",
  props: {
    post: {
      type: Object,
      require: true
    }
  }
}
</script>

<style scoped>
.post {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  border: 2px solid teal;
  margin-top: 16px;
}

</style>