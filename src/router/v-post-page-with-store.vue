<template>
  <div>
    <h1>{{ $store.state.post.limit }}</h1>
  </div>
  <div class="posts">
    <h1 class="posts__header">Страница с постами</h1>
      <ui-my-input
          :model-value="searchQuery"
          @update:model-value="setSearchQuery"
          placeholder="Поиск..."
          class="posts__input"
          v-focus
      />
    <div class="posts__btns">
      <ui-button @click="showDialog">
        Создать пост
      </ui-button>
      <ui-select
          :model-value="selectedSort"
          @update:model-value="setSelectedSort"
          :options="sortOption"
      />
    </div>
    <ui-dialog v-model:show="dialogVisible">
      <v-post-form
          @create="createPost"
          @closeDialog="closeDialog"
      />
    </ui-dialog>
    <v-post-list
        :posts="sortedAndSearchedPosts"
        @remove="removePost"
        v-if="!isPostLoading"
    />
    <v-loading v-else/>
    <div v-intersection="loadMorePosts" class="observer"></div>
  </div>
</template>

<script>
import VPostForm from "@/components/v-post-form";
import VPostList from "@/components/v-post-list";
import UiButton from "@/components/UI/ui-button";
import VLoading from "@/components/v-loading";
// import UiSelect from "@/components/UI/ui-select";
// import UiMyInput from "@/components/UI/ui-input";
import {mapState, mapGetters, mapMutations, mapActions} from "vuex"

export default {
  name: "v-post-page",
  components: {VLoading, UiButton, VPostList, VPostForm},
  data() {
    return {
      dialogVisible: false,
    }
  },
  methods: {
    ...mapMutations({
      setPage: "setPage",
      setSearchQuery: "setSearchQuery",
      setSelectedSort: "setSelectedSort",
    }),
    ...mapActions({
      loadMorePosts: "loadMorePosts",
      fetchPosts: "fetchPost"
    }),
    createPost(post) {
      this.posts.push(post)
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    showDialog() {
      this.dialogVisible = true
    },
    closeDialog(bool) {
      this.dialogVisible = bool
    },
    changePage(pageNumber) {
      this.page = pageNumber
    },
  },
  computed: {
    ...mapState({
      posts: state => state.post.posts,
      modifierValue: state => state.post.modifierValue,
      isPostLoading: state => state.post.isPostLoading,
      selectedSort: state => state.post.selectedSort,
      searchQuery: state => state.post.searchQuery,
      page: state => state.post.page,
      limit: state => state.post.limit,
      totalPages: state => state.post.totalPages,
      sortOption: state => state.post.sortOption
    }),
    ...mapGetters({
      sortedPosts: "sortedPosts",
      sortedAndSearchedPosts: "sortedAndSearchedPosts",
    })
  },
  mounted() {
    this.fetchPosts();
  },
  namespaced: true
}
</script>

<style scoped>
.posts {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 32px;
}

.posts__header {
  margin-bottom: 32px;
  text-align: center;
  font-weight: 400;
  font-size: 60px;
  line-height: 82px;
  color: #111;
}

.posts__btns {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto 64px auto;
}

.posts__input {
  margin-bottom: 16px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.posts-like {
  display: flex;
  justify-content: center;
  margin-top: 16px;
  gap: 16px;
}
</style>