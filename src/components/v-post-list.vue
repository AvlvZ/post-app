<template>
  <div class="post-list">
    <div v-if="$store.state.post.posts.length > 0">
      <h3 class="post-list__header">Список постов</h3>
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

.user-list-enter-active,
.user-list-leave-active {
  transition: all .4s;
}

.user-list-enter, .user-list-leave-to, .user-list-leave-active
{
  opacity: 0;
  transform: translateX(130px);
}
.user-list-move {
  transition: transform .4s;
}

.post-list__header {
  font-weight: 400;
  font-size: 32px;
  line-height: 82px;
  color: #111;
}
</style>