<script setup lang="ts">
import TitleMenuList from './TitleMenuList.vue'
</script>

<template>
  <TitleMenuList url="farms" title="Earn">
    <router-link to="farms"
      ><h1 class="farms hover:rounded-t-2xl">Farms</h1>
    </router-link>
    <router-link to="pools"
      ><h1 class="pools hover:rounded-b-2xl">Pools</h1></router-link
    >
  </TitleMenuList>
</template>

<style scoped>
h1 {
  padding: 16px;
}
h1:hover {
  background-color: #eff4f5;
}
</style>
