<script setup>
import {ref, computed} from 'vue'
import useVuelidate from '@vuelidate/core'
import Input from '@/components/Validation.vue'
import { required, minLength, maxLength, emailerror } from "@/i18n/translation";


const props = defineProps({
  openLogin: {
    type: Boolean,
    required: true,
  },
});

const emailField = ref('')
const passwordField = ref('')

const rules = computed(() => ({
  emailField: { required, minLength, maxLength, emailerror },
  passwordField: { required, maxLength },
}))

const v = useVuelidate(rules, {emailField, passwordField})

const submitFormLogin = () => {
  v.value.$touch()
  if (v.value.$error) return
  alert('Form login submitted')
}

const logpassShowHide = () => {
  const logpass = document.querySelector('#logpass');
  const logpassinput = document.querySelector('#logpass input');
  if (logpassinput.getAttribute('type') === 'password') {
    logpassinput.setAttribute('type', 'text');
    logpass.classList.add('active');
  } else {
    logpassinput.setAttribute('type', 'password')
    logpass.classList.remove('active');
  }
};

const toggleForgot = () => {
  document.querySelector('.form__login').classList.remove('active');
  document.querySelector('.form__forgot').classList.add('active');
  document.querySelector('.form__forgot_block').scrollTop = 0;
};

const toggleReg = () => {
  document.querySelector('.form__login').classList.remove('active');
  document.querySelector('.form__registration').classList.add('active');
  document.querySelector('.form__registration_block').scrollTop = 0;
};
</script>

<template>
  <div :class="['form__login', { active: openLogin }]">
    <div class="form__login_block">
      <div class="form__top">
        <h4 class="form__head">{{ $t("login.head") }}</h4>
        <p class="form__desc text_five">{{ $t("login.desc") }}</p>
      </div>
      <form @submit.prevent="submitFormLogin">
        <Input
          :label="$t('login.email')"
          name="email"
          :placeholder="$t('login.emailplace')"
          v-model:value="v.emailField.$model"
          :error="v.emailField.$errors"/>
        <div class="form__password" id="logpass">
          <Input
            :label="$t('login.pass')"
            name="password"
            :placeholder="$t('login.passplace')"
            v-model:value="v.passwordField.$model"
            :error="v.passwordField.$errors"
            type="password"/>
          <a class="form__password_button" @click="logpassShowHide">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9999 6.75C11.3878 6.75 10.7851 6.8318 10.1965 6.97791C9.79452 7.0777 9.38772 6.83271 9.28792 6.4307C9.18812 6.02869 9.43312 5.62189 9.83513 5.52209C10.5292 5.3498 11.2535 5.25 11.9999 5.25C15.0225 5.25 17.6917 6.88254 19.5496 8.42257C20.4892 9.20141 21.2478 9.97852 21.7717 10.5609C22.034 10.8526 22.2387 11.0967 22.379 11.2694C22.4492 11.3559 22.5033 11.4245 22.5406 11.4725C22.5592 11.4965 22.5736 11.5153 22.5837 11.5286L22.5957 11.5443L22.5992 11.549L22.6003 11.5505C22.6005 11.5507 22.601 11.5515 21.9999 12C22.601 12.4485 22.601 12.4486 22.6009 12.4487L22.5992 12.451L22.5957 12.4557L22.5837 12.4714C22.5736 12.4847 22.5592 12.5035 22.5406 12.5275C22.5033 12.5755 22.4492 12.6441 22.379 12.7306C22.2387 12.9033 22.034 13.1474 21.7717 13.4391C21.2477 14.0215 20.4892 14.7986 19.5496 15.5774C19.2307 15.8418 18.7579 15.7975 18.4936 15.4786C18.2292 15.1597 18.2735 14.6869 18.5924 14.4226C19.4624 13.7014 20.1683 12.9785 20.6565 12.4359C20.804 12.272 20.9311 12.125 21.0365 12C20.9311 11.875 20.804 11.728 20.6565 11.5641C20.1684 11.0215 19.4624 10.2986 18.5924 9.57743C16.831 8.11746 14.5003 6.75 11.9999 6.75ZM21.9999 12L22.6009 12.4487C22.7994 12.1827 22.7996 11.8175 22.601 11.5515L21.9999 12ZM4.45023 8.42258C4.74427 8.17885 5.17449 8.195 5.44943 8.46009L14.5205 17.2061C14.7168 17.3954 14.7949 17.6762 14.7245 17.9396C14.6542 18.203 14.4464 18.4075 14.1819 18.4736C13.4827 18.6486 12.7526 18.75 11.9999 18.75C8.9774 18.75 6.30818 17.1175 4.45024 15.5774C3.51063 14.7986 2.75211 14.0215 2.2282 13.4391C1.96581 13.1474 1.76113 12.9033 1.62085 12.7306C1.55068 12.6441 1.49655 12.5755 1.45928 12.5275C1.44065 12.5035 1.42623 12.4847 1.41612 12.4714L1.4042 12.4557L1.40069 12.451L1.39956 12.4495C1.39939 12.4493 1.39883 12.4485 1.99993 12C1.39883 11.5515 1.3989 11.5514 1.39897 11.5513L1.40069 11.549L1.4042 11.5443L1.41612 11.5286C1.42623 11.5153 1.44065 11.4965 1.45928 11.4725C1.49655 11.4245 1.55068 11.3559 1.62085 11.2694C1.76113 11.0967 1.96581 10.8526 2.2282 10.5609C2.75211 9.97852 3.51063 9.20141 4.45023 8.42258ZM1.99993 12L1.39897 11.5513C1.20044 11.8173 1.20029 12.1825 1.39883 12.4485L1.99993 12ZM2.96333 12C3.06872 12.125 3.19589 12.272 3.34336 12.4359C3.83151 12.9785 4.53745 13.7014 5.40748 14.4226C7.16883 15.8825 9.4996 17.25 11.9999 17.25C12.1315 17.25 12.2627 17.2462 12.3933 17.2388L4.89992 10.0139C4.26066 10.5838 3.73273 11.1313 3.34336 11.5641C3.19589 11.728 3.06872 11.875 2.96333 12Z" fill="currentColor"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M10.664 9.75975C10.9693 10.0397 10.9898 10.5141 10.7099 10.8194C10.4237 11.1315 10.25 11.5455 10.25 12.0019C10.25 12.9683 11.0335 13.7519 12 13.7519C12.4772 13.7519 12.9085 13.5618 13.225 13.2516C13.5208 12.9617 13.9956 12.9664 14.2856 13.2622C14.5755 13.558 14.5708 14.0328 14.275 14.3228C13.6896 14.8967 12.8855 15.2519 12 15.2519C10.2051 15.2519 8.75 13.7968 8.75 12.0019C8.75 11.1556 9.07444 10.3834 9.60434 9.80559C9.88431 9.50031 10.3587 9.47979 10.664 9.75975Z" fill="currentColor"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M2.46967 2.46967C2.76256 2.17678 3.23744 2.17678 3.53033 2.46967L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L2.46967 3.53033C2.17678 3.23744 2.17678 2.76256 2.46967 2.46967Z" fill="currentColor"/>
            </svg>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M4.45015 8.42257C6.30809 6.88254 8.97732 5.25 11.9998 5.25C15.0224 5.25 17.6916 6.88254 19.5495 8.42257C20.4891 9.20141 21.2477 9.97852 21.7716 10.5609C22.034 10.8526 22.2386 11.0967 22.3789 11.2694C22.4491 11.3559 22.5032 11.4245 22.5405 11.4725C22.5591 11.4965 22.5735 11.5153 22.5837 11.5286L22.5956 11.5443L22.5991 11.549L22.6002 11.5505C22.6004 11.5507 22.6009 11.5515 21.9998 12C22.6009 12.4485 22.6008 12.4487 22.6006 12.4489L22.5991 12.451L22.5956 12.4557L22.5837 12.4714C22.5735 12.4847 22.5591 12.5035 22.5405 12.5275C22.5032 12.5755 22.4491 12.6441 22.3789 12.7306C22.2386 12.9033 22.034 13.1474 21.7716 13.4391C21.2477 14.0215 20.4891 14.7986 19.5495 15.5774C17.6916 17.1175 15.0224 18.75 11.9998 18.75C8.97732 18.75 6.30809 17.1175 4.45015 15.5774C3.51055 14.7986 2.75202 14.0215 2.22811 13.4391C1.96572 13.1474 1.76104 12.9033 1.62076 12.7306C1.5506 12.6441 1.49646 12.5755 1.4592 12.5275C1.44057 12.5035 1.42614 12.4847 1.41603 12.4714L1.40412 12.4557L1.40061 12.451L1.39947 12.4495C1.39931 12.4493 1.39875 12.4485 1.99984 12C1.39875 11.5515 1.39889 11.5513 1.39906 11.5511L1.40061 11.549L1.40412 11.5443L1.41603 11.5286C1.42614 11.5153 1.44057 11.4965 1.4592 11.4725C1.49646 11.4245 1.5506 11.3559 1.62076 11.2694C1.76104 11.0967 1.96572 10.8526 2.22811 10.5609C2.75202 9.97852 3.51055 9.20141 4.45015 8.42257ZM1.99984 12L1.39906 11.5511C1.20052 11.8171 1.20021 12.1825 1.39875 12.4485L1.99984 12ZM2.96324 12C3.06863 12.125 3.19581 12.272 3.34327 12.4359C3.83142 12.9785 4.53736 13.7014 5.4074 14.4226C7.16875 15.8825 9.49952 17.25 11.9998 17.25C14.5002 17.25 16.8309 15.8825 18.5923 14.4226C19.4623 13.7014 20.1683 12.9785 20.6564 12.4359C20.8039 12.272 20.9311 12.125 21.0364 12C20.9311 11.875 20.8039 11.728 20.6564 11.5641C20.1683 11.0215 19.4623 10.2986 18.5923 9.57743C16.8309 8.11746 14.5002 6.75 11.9998 6.75C9.49952 6.75 7.16875 8.11746 5.4074 9.57743C4.53736 10.2986 3.83142 11.0215 3.34327 11.5641C3.19581 11.728 3.06863 11.875 2.96324 12ZM21.9998 12L22.6006 12.4489C22.7992 12.1829 22.7995 11.8175 22.6009 11.5515L21.9998 12Z" fill="currentColor"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.75 12C8.75 10.2051 10.2051 8.75 12 8.75C13.7949 8.75 15.25 10.2051 15.25 12C15.25 13.7949 13.7949 15.25 12 15.25C10.2051 15.25 8.75 13.7949 8.75 12ZM12 10.25C11.0335 10.25 10.25 11.0335 10.25 12C10.25 12.9665 11.0335 13.75 12 13.75C12.9665 13.75 13.75 12.9665 13.75 12C13.75 11.0335 12.9665 10.25 12 10.25Z" fill="currentColor"/>
            </svg>
          </a>
        </div>
        <button type="submit" class="btn btn__primary form__button btn__login">{{ $t("login.button") }}</button>
        <a class="form__forgot_button" @click="toggleForgot">{{ $t("login.forgot") }}</a>
      </form>
      <div class="form__bottom">
        <p class="form__desc text_five">{{ $t("login.have") }}</p>
        <a class="form__registration_button" @click="toggleReg">{{ $t("login.reg") }}</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.form__login {
  height: 100%;
  max-height: 0;
  opacity: 0;
  -webkit-transition: max-height 0s linear, opacity 0.2s linear;
  transition: max-height 0s linear, opacity 0.2s linear;
  -webkit-transition-delay: 0.2s, 0s;
  transition-delay: 0.2s, 0s;
  overflow: hidden;
}

.form__login.active {
  max-height: 100000px;
  opacity: 1;
  -webkit-transition-delay: 0.2s, 0.3s;
  transition-delay: 0.2s, 0.3s;
}

.form__login_block {
  display: flex;
  height: 100%;
  max-height: calc(var(--height) - 160px);
  padding: 50px 40px;
  flex-direction: column;
  gap: 40px;
  overflow-x: hidden;
  overflow-y: scroll;
}

.form__login_block::-webkit-scrollbar {
  display: none;
}

.form__login_block::-webkit-scrollbar-thumb {
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

.form__password input {
  padding: 15px 50px 15px 15px;
}

@media (max-width: 580px) {
  .form__login_block {
    padding: 30px 15px;
    gap: 30px;
  }
}
</style>