<template>
  <div class="posts">
    <h1>{{likes}}</h1>
    <ui-button @click="addLikes">Add Likes</ui-button>
    <h1 class="posts__header">Страница с постами</h1>
<!--    <ui-my-input-->
<!--        v-model="searchQuery"-->
<!--        placeholder="Поиск..."-->
<!--        class="posts__input"-->
<!--        v-focus-->
<!--    />-->
<!--    <div class="posts__btns">-->
<!--      <ui-button @click="showDialog">-->
<!--        Создать пост-->
<!--      </ui-button>-->
<!--      <ui-select-->
<!--          v-model="selectedSort"-->
<!--          :options="sortOption"-->
<!--      />-->
<!--    </div>-->
<!--    <ui-dialog v-model:show="dialogVisible">-->
<!--      <v-post-form-->
<!--          @create="createPost"-->
<!--          @closeDialog="closeDialog"-->
<!--      />-->
<!--    </ui-dialog>-->
<!--    <v-post-list-->
<!--        :posts="sortedAndSearchedPosts"-->
<!--        @remove="removePost"-->
<!--        v-if="!isPostLoading"-->
<!--    />-->
<!--    <v-loading v-else/>-->
<!--    <div v-intersection="loadMorePosts" class="observer"></div>-->
  </div>
</template>

<script>
// import VPostForm from "@/components/v-post-form";
// import VPostList from "@/components/v-post-list";
// import UiButton from "@/components/UI/ui-button";
// import VLoading from "@/components/v-loading";
// import UiSelect from "@/components/UI/ui-select";
// import UiMyInput from "@/components/UI/ui-input";
import {ref} from "vue";
import UiButton from "@/components/UI/ui-button";

export default {
  name: "v-post-page",
  components: {UiButton},
  // components: {UiMyInput, UiSelect, VLoading, UiButton, VPostList, VPostForm},
  data() {
    return {
      dialogVisible: false,
      sortOption: [
        {value: "title", name: "По названию"},
        {value: "body ", name: "По описанию"}
      ]
    }
  },
  setup(props) {
    const likes = ref(0);
    const addLikes = () => {
      likes.value += 1;
    }

    console.log(likes)

    return {
      likes,
      addLikes,
      props
    };
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