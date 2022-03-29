<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps({
  url: String,
  title: String,
})
const mouseoverList = ref(false)
</script>

<template>
  <router-link :to="url">
    <div @mouseleave="mouseoverList = false" @mouseover="mouseoverList = true">
      <div class="relative">
        <h1 class="hover:bg-[#eff4f5] hover:rounded-2xl p-4">{{ title }}</h1>
        <div
          class="border rounded-xl w-[280px] absolute list"
          v-if="mouseoverList"
        >
          <slot />
        </div>
      </div>
    </div>
  </router-link>
</template>
<style scoped>
.list {
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(231, 227, 235);
  width: 280px;
}
</style>
