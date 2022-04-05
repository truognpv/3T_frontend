<script setup lang="ts">
import { ref, onMounted, computed, onBeforeUnmount } from 'vue'

const totalTime = ref(300)

let interval: any = null

onMounted(() => {
  interval = setInterval(() => {
    totalTime.value--
    if (totalTime.value > 0) {
      return interval
    } else {
      return (totalTime.value = 300)
    }
  }, 1000)
})

onBeforeUnmount(() => {
  clearInterval(interval)
})

const minutes = computed(() => {
  return Math.floor(totalTime.value / 60)
})
const seconds = computed(() => {
  if (Math.floor(totalTime.value - minutes.value * 60) < 10) {
    return 0 + '' + Math.floor(totalTime.value - minutes.value * 60)
  } else {
    return Math.floor(totalTime.value - minutes.value * 60)
  }
})
</script>

<template>
  <div>{{ minutes }}:</div>
  <div>{{ seconds }}</div>
</template>
