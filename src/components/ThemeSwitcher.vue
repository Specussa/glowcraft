<script setup lang="ts">
import { ref, onMounted } from 'vue';

export type UserTheme = 'light' | 'dark';

const setTheme = (theme: UserTheme) => {
  localStorage.setItem('user-theme', theme);
  userTheme.value = theme;
  document.documentElement.className = theme;
};

const getTheme = (): UserTheme => {
  return localStorage.getItem('user-theme') as UserTheme;
};

const toggleTheme = (): void => {
  const activeTheme = localStorage.getItem('user-theme');
  if (activeTheme === 'light') {
    setTheme('dark');
  } else {
    setTheme('light');
  }
};

const getMediaPreference = (): UserTheme => {
  const hasDarkPreference = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (hasDarkPreference) {
    return 'dark';
  } else {
    return 'light';
  }
};

const userTheme = ref<UserTheme>(getTheme() || getMediaPreference());

onMounted(() => setTheme(userTheme.value));
</script>

<template>
  <button @click="toggleTheme">
    <span v-if="userTheme === 'dark'">
      🌙
    </span>
    <span v-if="userTheme === 'light'">
      ☀️
    </span>
  </button>
</template>