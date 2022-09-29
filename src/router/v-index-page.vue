<template>
  <div class="welcome">
    <div class="welcome__content">
      <h1 class="welcome__header">
        WELCOME
        <button class="welcome-header__marker">User!</button>
      </h1>
      <p class="welcome__title">
        Это моя тестовая страница созданная с целью изучить основные принципы работы со Vue.js, а также его экосистему.
        <br>
        Пожалуйста, поставь звездочку на данном репозитории <a href="https://github.com/AvlvZ/post-app"
                                                               class="welcome-title__link">Github</a>. <br>
        Заранее благодарю!
      </p>
      <button class="welcome__btn">Перейти к постам</button>
    </div>
    <div class="welcome__content">
      <img src="@/assets/images/Rocket.png" alt="Полетели!" class="welcome__background">
    </div>
  </div>
</template>

<script>
export default {
  name: "v-index-page"
}
</script>

<style scoped>
.welcome {
  display: flex;
  gap: 64px;
  padding: 0 32px;
}

.welcome__content:first-child {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.welcome__header {
  font-weight: 400;
  font-size: 63px;
  line-height: 82px;
  color: #000000;
  margin-bottom: 28px;
}

.welcome-header__marker {
  background: linear-gradient(90deg, #9500FF 49.84%, #CC00FF 100%);
  border: 2px solid #9500FF;
  border-radius: 59px;
  font-weight: 700;
  font-size: 63px;
  line-height: 82px;
  color: #FFFFFF;
  padding: 13px 26px;
}

.welcome__title {
  font-weight: 400;
  font-size: 29px;
  line-height: 38px;
  color: #000000;
  margin-bottom: 28px;
}

.welcome__btn {
  font-weight: 400;
  font-size: 57px;
  line-height: 74px;
  color: #9500FF;
  border: 2px solid #9500FF;
  border-radius: 59px;
  padding: 20px 43px;
  cursor: pointer;
}
</style>