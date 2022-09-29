<template>
  <div class="posts">
    <h1 class="posts__header">Страница с постами</h1>
    <ui-my-input
        v-model="searchQuery"
        placeholder="Поиск..."
        class="posts__input"
        v-focus
    />
    <div class="posts__btns">
      <ui-button @click="showDialog">
        Создать пост
      </ui-button>
      <ui-select
          v-model="selectedSort"
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
import axios from "axios";
import VLoading from "@/components/v-loading";
import UiSelect from "@/components/UI/ui-select";
import UiMyInput from "@/components/UI/ui-input";

export default {
  name: "v-post-page",
  components: {UiMyInput, UiSelect, VLoading, UiButton, VPostList, VPostForm},
  data() {
    return {
      posts: [],
      dialogVisible: false,
      modifierValue: "",
      isPostLoading: false,
      selectedSort: "",
      searchQuery: "",
      page: 2,
      limit: 10,
      totalPages: 0,
      sortOption: [
        {value: "title", name: "По названию"},
        {value: "body ", name: "По описанию"}
      ]
    }
  },
  methods: {
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
    async fetchPost() {
      try {
        this.isPostLoading = true
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
          params: {
            _page: this.page,
            _limit: this.limit
          }
        });
        this.totalPages = Math.ceil(response.headers["x-total-count"] / this.limit)
        this.posts = response.data;
        this.isPostLoading = false;
      } catch (error) {
        console.error(error)
      }
    },
    async loadMorePosts() {
      try {
        this.page++;
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
          params: {
            _page: this.page,
            _limit: this.limit
          }
        });
        this.totalPages = Math.ceil(response.headers["x-total-count"] / this.limit)
        console.log(response.headers)
        this.posts = [...this.posts, ...response.data];
      } catch (error) {
        console.error(error)
      }
    }
  },
  async mounted() {
    await this.fetchPost();
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }
  },
  watch: {
    // page() {
    //   this.fetchPost()
    // }
  }
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
</style>