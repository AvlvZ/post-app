<template>
  <div class="app">
    <h1 class="app__header">Страница с постами</h1>
    <div class="app__btns">
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
        :posts="sortedPosts"
        @remove="removePost"
        v-if="!isPostLoading"
    />
    <v-loading v-else/>
  </div>
</template>

<script>

import VPostForm from "@/components/v-post-form";
import VPostList from "@/components/v-post-list";
import UiButton from "@/components/UI/ui-button";
import axios from "axios";
import VLoading from "@/components/v-loading";
import UiSelect from "@/components/UI/ui-select";


export default {
  name: 'App',
  components: {UiSelect, VLoading, UiButton, VPostList, VPostForm},
  data() {
    return {
      posts: [],
      dialogVisible: false,
      modifierValue: "",
      isPostLoading: false,
      selectedSort: "",
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
    showDialog () {
      this.dialogVisible = true
    },
    closeDialog(bool) {
      this.dialogVisible = bool
    },
  },
  async mounted() {
    try {
      this.isPostLoading = true
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=10");
      this.posts = response.data;
      this.isPostLoading = false;

    } catch (error) {
      console.error(error)
    }
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
    }
  }
}
</script>

<style>
@import "@vueform/multiselect/themes/default.css";
.app {
  padding: 64px;
}
.app__header {
  margin-bottom: 32px;
  text-align: center;
}
.app__btns {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto 64px auto;
}

.multiselect {
  width: 200px;
  margin: 0;
  border: 2px solid teal;
}
</style>
