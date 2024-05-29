<script setup>
import {ref, computed} from 'vue'
import useVuelidate from '@vuelidate/core'
import Input from '@/components/Validation.vue'
import { required, minLength, maxLength, emailerror } from "@/i18n/translation";

const props = defineProps({
  openForgot: {
    type: Boolean,
    required: false,
  },
});

const emailField = ref('')

const rules = computed(() => ({
  emailField: { required, minLength, maxLength, emailerror },
}))

const submitFormForgot = () => {
  v.value.$touch()
  if (v.value.$error) return
  alert('Form forgot submitted')
}

const v = useVuelidate(rules, {emailField})

const toggleLogin = () => {
  document.querySelector('.form__forgot').classList.remove('active');
  document.querySelector('.form__login').classList.add('active');
  document.querySelector('.form__login_block').scrollTop = 0;
};
</script>

<template>
  <div :class="['form__forgot', { active: openForgot }]">
    <div class="form__forgot_block">
      <div class="form__top">
        <h4 class="form__head">{{ $t("forgot.head") }}</h4>
        <p class="form__desc text_five">{{ $t("forgot.desc") }}</p>
      </div>
      <form @submit.prevent="submitFormForgot">
        <Input
          :label="$t('forgot.email')"
          name="forgotemail"
          :placeholder="$t('forgot.emailplace')"
          v-model:value="v.emailField.$model"
          :error="v.emailField.$errors"/>
        <button type="submit" class="btn btn__primary form__button btn__login">{{ $t("forgot.button") }}</button>
      </form>
      <div class="form__bottom">
        <p class="form__desc text_five">{{ $t("forgot.have") }}</p>
        <a class="form__registration_button" @click="toggleLogin">{{ $t("forgot.login") }}</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.form__forgot {
  height: 100%;
  max-height: 0;
  opacity: 0;
  -webkit-transition: max-height 0s linear, opacity 0.2s linear;
  transition: max-height 0s linear, opacity 0.2s linear;
  -webkit-transition-delay: 0.2s, 0s;
  transition-delay: 0.2s, 0s;
  overflow: hidden;
}

.form__forgot.active {
  max-height: 100000px;
  opacity: 1;
  -webkit-transition-delay: 0.2s, 0.3s;
  transition-delay: 0.2s, 0.3s;
}

.form__forgot_block {
  display: flex;
  height: 100%;
  max-height: calc(var(--height) - 160px);
  padding: 50px 40px;
  flex-direction: column;
  gap: 40px;
  overflow-x: hidden;
  overflow-y: scroll;
}

.form__forgot_block::-webkit-scrollbar {
  display: none;
}

.form__forgot_block::-webkit-scrollbar-thumb {
  display: none;
}

.form__top {
  display: flex;
  padding: 0 0 30px;
  flex-direction: column;
  gap: 20px;
  border-bottom: 1px solid var(--border);
}

.form__bottom {
  display: flex;
  padding: 40px 0 0;
  flex-wrap: wrap;
  gap: 20px;
  border-top: 1px solid var(--border);
}

.form__forgot_button {
  display: block;
  padding: 30px 0 0;
  color: var(--color);
}

.form__registration_button {
  color: var(--color);
}

.form__button {
  width: 100%;
  margin: 10px 0 0;
}

@media (max-width: 580px) {
  .form__forgot_block {
    padding: 30px 15px;
    gap: 30px;
  }
}
</style>