<script setup>
  document.title = 'Главная BY Portal';
</script>

<template>
  <div class="main__back">
    <img alt="background image" src="@/assets/img/main/bg.webp"/>
  </div>
  <section>
    <div class="container">
      <h1>BY-Portal Home</h1>
    </div>
  </section>
</template>

<style lang="css" scoped>
.main__back {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
}
.main__back img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>