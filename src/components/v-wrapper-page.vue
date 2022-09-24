<template>
  <div class="page__wrapper">
    <button
        v-for="pageNumber in totalPages"
        :key="pageNumber.id"
        class="page"
        :class="{'current-page': page === pageNumber}"
        @click="$emit('changePage', pageNumber)"
    >
      {{ pageNumber }}
    </button>
  </div>
</template>

<script>
export default {
  name: "v-wrapper-page",
  props: {
    totalPages: {
      type: Number
    },
    page: {
      type: Number
    }
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped>


.page__wrapper {
  display: flex;
  gap: 8px;
  margin-top: 15px;
}

.page {
  border: 1px solid #000;
  background: #fff;
  padding: 10px;
  cursor: pointer;
}

.current-page {
  border: 2px solid teal;
}
</style>