<script lang="ts" setup>
import HeaderVue from './Header.vue'
import Footer from './Footer.vue'
</script>
<template>
  <HeaderVue />
  <slot></slot>

  <Footer />
</template>
<style scoped></style>
