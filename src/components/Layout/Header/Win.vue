<script setup lang="ts">
import TitleMenuList from './TitleMenuList.vue'
</script>

<template>
  <TitleMenuList url="prediction" title="Win">
    <router-link to="competition"
      ><h1 class="hover:rounded-t-2xl">Trading Competition</h1>
    </router-link>
    <router-link to="Prediction"><h1>Prediction</h1></router-link>
    <router-link to="lottery"
      ><h1 class="hover:rounded-b-2xl">Lottery</h1></router-link
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
