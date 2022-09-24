<template>
  <div class="post">
    <div class="post__content">
      <div>
        <strong>Название:</strong> {{ post.title }}
      </div>
      <div>
        <strong>Описание:</strong> {{ post.body }}
      </div>
      <div class="post__id">
        {{ post.id }}
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
.post__id {
  text-align: center;
  font-size: 12px;
  margin-top: 32px;
}
.post__content {
  width: 100%;
}
</style>