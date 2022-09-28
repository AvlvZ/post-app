<template>
  <div class="app">
    <v-header />
    <router-view>

    </router-view>
  </div>
</template>

<style>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}
</style>
<script>
import VHeader from "@/components/v-header";
export default {
  components: {VHeader}
}
</script>