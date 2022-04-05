<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import Up from './Up.vue'
import Down from './Down.vue'

const timer = ref(600)
let interval: any = null

onMounted(() => {
  interval = setInterval(() => {
    timer.value--
    if (timer.value > 0) {
      return interval
    } else {
      return '00:00'
    }
  }, 1000)
})
onBeforeUnmount(() => {
  clearInterval(interval)
})

const minutes = computed(() => {
  return Math.floor(timer.value / 60)
})

const seconds = computed(() => {
  return Math.floor(timer.value - minutes.value * 60)
})
</script>
<template>
  <div class="w-[320px]">
    <div
      class="flex items-center justify-between p-2 bg-gray-200 rounded-t-2xl"
    >
      <div class="flex">
        <svg
          viewBox="0 0 24 24"
          width="21px"
          color="text"
          xmlns="http://www.w3.org/2000/svg"
          class="sc-5a69fd5e-0 fjAkFI"
        >
          <path
            d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12.5 7.75C12.5 7.33579 12.1642 7 11.75 7C11.3358 7 11 7.33579 11 7.75V13L15.5537 15.8022C15.9106 16.0219 16.3781 15.9106 16.5978 15.5537C16.8192 15.1938 16.7041 14.7225 16.3419 14.5051L12.5 12.2V7.75Z"
          ></path>
        </svg>
        <h1>Later</h1>
      </div>
      <h1>#260698</h1>
    </div>
    <div class="p-4 bg-white rounded-b-2xl">
      <Up />

      <div class="p-1 bg-gray-600 rounded-2xl">
        <div
          class="flex flex-col items-center justify-center px-10 py-6 bg-white rounded-2xl"
        >
          <h1>Entry starts</h1>
          <div class="flex">
            <h1>~</h1>
            <h1>{{ minutes }}:</h1>
            <h1>{{ seconds }}</h1>
          </div>
        </div>
      </div>

      <Down />
    </div>
  </div>
</template>
