<template>
  <header class="header">
    <button class="logo" @click="$router.push('/')">
      Vue.js
    </button>
    <ul class="menu">
      <li class="menu__item">
        <button class="menu__link" @click="$router.push('/posts')">Посты</button>
      </li>
      <li class="menu__item">
        <button class="menu__link" @click="$router.push('/about')">О сайте</button>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: "v-header"
}
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  background: #333;
  margin-bottom: 64px;
  padding: 0 100px;
}

.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-weight: 400;
  font-size: 40px;
  line-height: 82px;
  color: antiquewhite;
  background: inherit;
  border: none;
  cursor: pointer;
}

.menu {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  list-style: none;
}

.menu__item {
  text-decoration: none;
  color: aliceblue;
}

.menu__link {
  background: inherit;
  border: none;
  color: antiquewhite;
  font-size: 20px;
  cursor: pointer;
}
</style>