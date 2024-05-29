<script setup>
import {ref} from "vue";

const links = ref ([
  {name: 'Typography', href: '/typography'},
  {name: 'Button', href: '/button'},
])
</script>

<template>
  <div class="sidebar">
    <router-link class="sidebar__link" v-for="link in links" :key="link.name" :to="link.href">
      {{link.name}}
    </router-link>
  </div>
</template>