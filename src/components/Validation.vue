<script setup>
const emit = defineEmits(['update:value'])
const props = defineProps({
  error: {
    type: Array,
    required: false
  },
  value: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  }
})

const updateValue = (e) => {
  emit('update:value', e.target.value)
}
</script>

<template>
  <div class="form__control">
    <input
      class="form__input"
      :type="type"
      :name="name"
      :id="name"
      :placeholder="placeholder"
      :value="value"
      @input="updateValue">
    <TransitionGroup>
      <div
        class="form__error"
        v-for="element of error"
        :key="element.$uid">
        <small class="form__message">{{element.$message}}</small>
      </div>
    </TransitionGroup>
    <label :for="name" class="form__label">{{label}}</label>
  </div>
</template>

<style lang="css">
.form__control {
  display: flex;
  flex-direction: column;
  padding: 0 0 20px;
  position: relative;
}
.form__input {
  width: 100%;
  height: 50px;
  padding: 15px;
  order: 2;
  position: relative;
  z-index: 1;
}
.form__label {
  display: block;
  margin: 0 0 15px;
  color: var(--text);
  order: 1;
  -webkit-transform: translateY(0px);
  transform: translateY(0px);
  -webkit-transition: -webkit-transform 0.1s linear, color 0.1s linear;
  transition: transform 0.1s linear, color 0.1s linear;
}
/* .form__input:not(:placeholder-shown) + .form__label {

} */
.form__input:focus + .form__label,
.form__label:focus {
  color: var(--color);
  -webkit-transform: translateY(10px);
  transform: translateY(10px);
}
.form__error + .form__label {
  color: var(--error);
  -webkit-transform: translateY(10px);
  transform: translateY(10px);
}
.form__error {
  margin-top: 4px;
  order: 3;
}
.form__error.v-enter-active,
.form__error.v-leave-active {
  -webkit-transition: -webkit-transform 0.3s ease, opacity 0.3s ease, height 0.3s ease, margin 0.3s ease;
  transition: transform 0.3s ease, opacity 0.3s ease, height 0.3s ease, margin 0.3s ease;
}
.form__error.v-enter-from,
.form__error.v-leave-to {
  height: 0px;
  margin: 0px;
  opacity: 0;
  -webkit-transform: translateY(-100%);
  transform: translateY(-100%);
}

.form__password {
  position: relative;
}

.form__password_button {
  position: absolute;
  top: 50px;
  right: 15px;
  z-index: 1;
}

.form__password .form__password_button svg:nth-child(1),
.form__password.active .form__password_button svg:nth-child(2) {
  display: flex;
}

.form__password.active .form__password_button svg:nth-child(1),
.form__password .form__password_button svg:nth-child(2) {
  display: none;
}
</style>