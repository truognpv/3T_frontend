<script setup lang="ts">
import TitleMenuList from './TitleMenuList.vue'
</script>

<template>
  <TitleMenuList url="nfts" title="NFT">
    <router-link to="overview"
      ><h1 class="hover:rounded-t-2xl">Over View</h1>
    </router-link>
    <router-link to="collections"><h1>Collections</h1></router-link>
    <router-link to="activity"
      ><h1 class="hover:rounded-b-2xl">Activity</h1></router-link
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
