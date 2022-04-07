<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  isActive: Boolean,
  status: String,
})

const bgColor = computed(() => {
  return props.isActive ? 'bg-[#31D0AA]' : 'bg-[#ED4B9E]'
})
</script>
<template>
  <div class="p-1 rounded-2xl" :class="bgColor">
    <div class="flex flex-col p-4 my-auto bg-white rounded-2xl">
      <h1 class="mb-2">{{ status }}</h1>
      <div class="flex justify-between mb-4">
        <h1>$450</h1>
        <h1>$0.567</h1>
      </div>
      <div class="flex justify-between mb-1">
        <h1>Locked Price:</h1>
        <h1>$455</h1>
      </div>
      <div class="flex justify-between">
        <h1>Prize Pool:</h1>
        <h1>82.000BNB</h1>
      </div>
    </div>
  </div>
</template>
