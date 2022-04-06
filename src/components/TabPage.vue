<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

const isActive = computed(() => {
  return route.path.split('/')[1]
})
</script>

<template>
  <div class="flex justify-center gap-10">
    <router-link to="competition" class="nav_page"
      >Trading Competition</router-link
    >
    <router-link
      to="prediction"
      :class="{ 'is-active': isActive === 'prediction' }"
      class="relative nav_page"
      >Prediction (BETA)
      <div :class="{ 'is-show': isActive === 'prediction' }"></div>
    </router-link>

    <router-link
      to="lottery"
      class="relative nav_page"
      :class="{ 'is-active': isActive === 'lottery' }"
    >
      Lottery
      <div :class="{ 'is-show': isActive === 'lottery' }"></div>
    </router-link>
  </div>
</template>

<style scoped>
.is-active {
  border-color: rgb(31, 199, 212);
  color: rgb(118, 69, 217);
  font-weight: 600;
}

.is-show {
  background-color: rgb(31, 199, 212);
  border-radius: 24px;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  width: 100%;
}
.nav_page {
  padding: 4px 4px 0px;
}

.nav_page:hover {
  background-color: #eff4f5;
}
</style>
