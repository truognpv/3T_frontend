<script setup lang="ts">
import TitleMenuList from './TitleMenuList.vue'
</script>

<template>
  <TitleMenuList url="swap" title="Trade">
    <router-link to="swap">
      <h1 class="page hover:rounded-t-2xl">Swap</h1>
    </router-link>
    <router-link to="limit"><h1 class="page">Limit</h1></router-link>
    <router-link to="swap"><h1 class="page">Liquidity</h1> </router-link>
    <a href="#"><h1 class="page hover:rounded-b-2xl">Perpetual</h1> </a>
  </TitleMenuList>
</template>

<style scoped>
h1 {
  padding: 16px;
}
.page:hover {
  background-color: #eff4f5;
}
</style>
