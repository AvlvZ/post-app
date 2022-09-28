<template>
  <header class="header">
    <ul class="menu">
      <li class="menu__item">
        <button class="menu__link">Посты</button>
      </li>
      <li class="menu__item">
        <button class="menu__link">О сайте</button>
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
  justify-content: center;
  height: 80px;
  background: rgba(0, 0, 0, 0.8);
  margin-bottom: 64px;
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
}
</style>