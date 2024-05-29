<script setup>
// const props = defineProps({
//   openReg: {
//     type: Boolean,
//     required: true,
//   },
// });
// import {ref, computed} from 'vue'
// import useVuelidate from '@vuelidate/core'
// import {helpers, minLength, maxLength, numeric, email, sameAs} from '@vuelidate/validators'

// import Input from '@/components/Validation.vue'

// const nameField = ref('')
// const emailField = ref('')
// const luckyField = ref('')
// const passwordField = ref('')
// const confirmPasswordField = ref('')
// const frontendField = ref('')

// const mustBeFrontend = (value) => value.includes('frontend')

// const rules = computed(() => ({
//   nameField: {
//     minLength: helpers.withMessage(`Минимальная длина: 3 символа`, minLength(3))
//   },
//   emailField: {
//     email: helpers.withMessage('Вы ввели неверный email', email)
//   },
//   luckyField: {
//     maxLength: helpers.withMessage(`Максимальная длина: 2 символа`, maxLength(3)),
//     numeric: helpers.withMessage('Вы можете ввести только цифры', numeric)
//   },
//   confirmPasswordField: {
//     sameAsPassword: helpers.withMessage(`Пароли не совпадают`, sameAs(passwordField.value))
//   },
//   frontendField: {
//     frontendField: helpers.withMessage('Строка должна содержать слово frontend', mustBeFrontend)
//   }
// }))

// const v = useVuelidate(rules, {nameField, emailField, luckyField, confirmPasswordField, frontendField})

// const submitForm = () => {
//   v.value.$touch()
//   if (v.value.$error) return
//   alert('Form submitted')
// }

// const props = defineProps({
//   openLogin: {
//     type: Boolean,
//     required: true,
//   },
// });
</script>

<template>
  <!-- <div :class="['header__form_block', { active: openLogin }]">
    <div class="header__form_top">
      <h4 class="header__form_head">Войти</h4>
      <p class="header__form_desc text_five">Добро пожаловать на блог-платформу By-portal!</p>
    </div>
    <form @submit.prevent="submitForm">
      <Input
        label="Your name"
        name="name"
        placeholder="Input your name"
        v-model:value="v.nameField.$model"
        :error="v.nameField.$errors"/>
        
      <Input
        label="Your email"
        name="email"
        placeholder="Input your email"
        v-model:value="v.emailField.$model"
        :error="v.emailField.$errors"/>
        
      <Input
        label="Your lucky number"
        name="lucky"
        placeholder="Input your lucky number"
        v-model:value="v.luckyField.$model"
        :error="v.luckyField.$errors"/>
        
      <Input
        label="Your password"
        name="password"
        placeholder="Please input password"
        v-model:value="passwordField"
        type="password"/>
        
      <Input
        label="Confirm password"
        name="confirm"
        placeholder="Please confirm password"
        v-model:value="v.confirmPasswordField.$model"
        :error="v.confirmPasswordField.$errors"
        type="password"/>

      <Input
        label="Frontend string"
        name="frontend"
        placeholder="Input string with frontend"
        v-model:value="v.frontendField.$model"
        :error="v.frontendField.$errors"/>

      <button type="submit" class="btn btn__primary btn__login">Войти</button>
    </form>
  </div> -->
</template>

<style scoped>
</style>