<template>
  <div class="add__form">
    <form class="form" @submit.prevent>
      <ui-my-input
          :typeProps="this.typeProps"
          :placeholderProps="this.placeholderProps[0]"
          v-model="post.title"
      />
      <ui-my-input
          :typeProps="this.typeProps"
          :placeholderProps="this.placeholderProps[0]"
          v-model="post.body"
      />

      <ui-button
          @click="createPost"
          class="btn"
      >
        Добавить пост
      </ui-button>
    </form>
  </div>
</template>

<script>
export default {
  name: "v-post-form",
  data() {
    return {
      post: {
        title: "",
        body: ""
      },
      typeProps: "text",
      placeholderProps: ["Введите название поста", "Введите текст поста"]
    }
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit("create", this.post)
      this.post = {
        title: "",
        body: ""
      }
      this.$emit("closeDialog", false);
    },
  }
}
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  margin-bottom: 64px;
}

.btn {
  align-self: flex-end;
  margin-top: 16px;
}

</style>