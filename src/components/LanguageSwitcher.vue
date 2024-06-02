<template>
  <li class="header__top_item language">
    <button class="header__top_link">
      <span @click="toggleHeaderLink">
        {{ $t("locale.language") }}
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.8337 7.49976L10.0003 12.4998L4.16699 7.49976" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
    </button>
    <div class="header__top_info">
      <ul class="header__top_info_list">
        <li class="header__top_info_item" v-for="sLocale in supportedLocales">
          <button class="header__top_info_link" @click="switchLanguage" :key="`locale-${sLocale}`" :value="sLocale" :selected="locale === sLocale">
            {{ t(`locale.${sLocale}`) }}
          </button>
        </li>
      </ul>
    </div>
  </li>
</template>

<script>
  import { useI18n } from 'vue-i18n'
  import { useRouter } from "vue-router"
  import Tr from "@/i18n/translation"

  export default {
    setup() {
      const { t, locale } = useI18n()

      const supportedLocales = Tr.supportedLocales

      const router = useRouter()

      const switchLanguage = async (event) => {
        const newLocale = event.target.value

        await Tr.switchLanguage(newLocale)

        try {
          await router.replace({ params: { locale: newLocale } })
        } catch(e) {
          console.log(e)
          router.push("/")
        }
          document.querySelectorAll(".header__top_flex .header__top_item").forEach(n => n.classList.remove('active'));
          document.querySelectorAll(".header__top_flex .header__top_info").forEach(n => n.style.maxHeight = null);
      }

      const toggleHeaderLink = async (event) => {
        if (event.target.parentElement.nextElementSibling && event.target.parentElement.parentElement.classList.contains("active")) {
          event.target.parentElement.parentElement.classList.remove("active");
          event.target.parentElement.nextElementSibling.style.maxHeight = null;
        } else if (event.target.parentElement.nextElementSibling) {
          document.querySelectorAll(".header__top_flex .header__top_item").forEach(n => n.classList.remove('active'));
          document.querySelectorAll(".header__top_flex .header__top_info").forEach(n => n.style.maxHeight = null);
          event.target.parentElement.nextElementSibling.style.maxHeight = event.target.parentElement.nextElementSibling.scrollHeight + "px";
          event.target.parentElement.parentElement.classList.add("active");
          event.preventDefault();
        }
      }

      return { t, locale, supportedLocales, switchLanguage, toggleHeaderLink }
    }
  }
</script>

<style lang="css" scoped>
.header__top_link,
.header__top_link span {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 300;
  line-height: 16.41px;
  color: var(--text);
  -webkit-transition: color 0.3s linear;
  transition: color 0.3s linear;
  cursor: pointer;
}

.header__top_item.active .header__top_link {
  color: var(--color);
}

.header__top_link svg {
  width: 20px;
  height: 20px;
  flex: 0 0 auto;
  object-fit: contain;
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);
  pointer-events: none;
  -webkit-transition: -webkit-transform 0.3s linear;
  transition: transform 0.3s linear;
}

.header__top_item.active .header__top_link svg {
  -webkit-transform: rotate(-90deg);
  transform: rotate(-90deg);
}

.header__top_info {
  max-height: 0px;
  position: absolute;
  top: 33px;
  left: 0;
  z-index: 10;
  opacity: 0;
  -webkit-transition: max-height 0.3s linear, opacity 0.3s linear;
  transition: max-height 0.3s linear, opacity 0.3s linear;
  overflow: hidden;
}

.header__top_list:nth-child(2) .header__top_info {
  left: auto;
  right: 0;
}

.header__top_item.active .header__top_info {
  max-height: 2000px;
  opacity: 1;
}

.header__top_info_list {
  display: flex;
  width: 300px;
  padding: 24px;
  flex-direction: column;
  border-radius: 24px;
  background-color: var(--white);
  overflow: hidden;
}

.header__top_info_link {
  display: flex;
  width: 100%;
  padding: 6px 12px;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 400;
  line-height: 16.41px;
  background-color: var(--white);
  color: var(--text);
  border-radius: 24px;
  -webkit-transition: color 0.15s linear, background-color 0.15s linear;
  transition: color 0.15s linear, background-color 0.15s linear;
  cursor: pointer;
}

.header__top_info_link:hover {
  background-color: var(--bg-color);
  color: var(--color);
  cursor: pointer;
}
</style>