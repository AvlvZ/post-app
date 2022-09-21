<template>
  <div v-if="posts.length > 0">
    <h3>Список постов</h3>
    <transition-group name="user-list">
      <v-post-item
          v-for="post in posts"
          :key="post.id"
          :post="post"
          @remove="$emit('remove', post)"
      />
    </transition-group>
  </div>
  <div style="color: red" v-else>
    Список постов пуст
  </div>
</template>

<script>
import VPostItem from "@/components/v-post-item";
export default {
  name: "v-post-list",
  components: {VPostItem},
  props: {
    posts: {
      type: Object,
      require: true
    }
  }
}
</script>

<style scoped>


.user-list-item {
  display: inline-block;
  margin-right: 10px;
}

.user-list-enter-active, .user-list-leave-active {
  transition: all 1s;
}

.user-list-enter, .user-list-leave-to /* .user-list-leave-active до версии 2.1.8 */
{
  opacity: 0;
  transform: translateY(30px);
}
</style>