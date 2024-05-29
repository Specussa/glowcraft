<template>
  <footer class="footer">
    <div class="container footer__container">
      <div class="footer__block">
        <ul class="footer__list">
          <li class="footer__item">
            <RouterLink :to="Tr.i18nRoute({ name: 'policy' })">Политика конфиденциальности</RouterLink>
          </li>
          <li class="footer__item">
            <RouterLink :to="Tr.i18nRoute({ name: 'rules' })">Правила пользования платформой</RouterLink>
          </li>
          <li class="footer__item">
            <RouterLink :to="Tr.i18nRoute({ name: 'offer' })">Оферта</RouterLink>
          </li>
        </ul>
        <p class="footer__copyright">© <span id="footer__year">{{new Date().getFullYear()}}</span>, Все права защищены</p>
      </div>
    </div>
  </footer>
</template>

<script>
  import LanguageSwitcher from "@/components/LanguageSwitcher.vue"
  import Tr from "@/i18n/translation"

  export default {
    components: { LanguageSwitcher },
    setup() {
      return { Tr }
    }
  }
</script>

<style lang="css" scoped>
/* start footer */
 .footer {
  display: flex;
  width: 100%;
  height: 100px;
  margin: auto 0 0;
  position: relative;
  z-index: 1;
 }
 .footer__block {
  display: flex;
  padding: 40px 0;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
 }
 .footer__list {
  display: flex;
  align-items: center;
  gap: 40px;
 }
 .footer__item {
  display: flex;
 }
/* end footer */

/* start mobile */
@media (max-width: 580px) {
  .footer__block {
    flex-direction: column;
    gap: 30px;
    text-align: center;
  }
  .footer__list {
    flex-direction: column;
    gap: 15px;
  }
}
/* end mobile */
</style>