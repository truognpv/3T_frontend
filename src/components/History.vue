<script setup lang="ts">
import FilterAll from './Filter/FilterAll.vue'
import { ref } from 'vue'

const isClose = ref(false)

function onClose() {
  isClose.value = !isClose.value
}
</script>

<template>
  <div class="flex justify-end">
    <div :class="{ history: isClose }" class="w-full">
      <div class="flex items-center justify-between">
        <h1>History</h1>
        <button class="flex" @click="onClose">
          Close
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-arrow-right"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#9e9e9e"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="5" y1="12" x2="19" y2="12" />
            <line x1="13" y1="18" x2="19" y2="12" />
            <line x1="13" y1="6" x2="19" y2="12" />
          </svg>
        </button>
      </div>

      <div class="flex justify-between border-2 items-centers rounded-2xl">
        <button class="w-1/2 text-center rounds">Rounds</button>
        <button class="w-1/2 text-center PNL">PNL</button>
      </div>

      <div>
        <h1>Filter</h1>
        <div class="flex">
          <label class="radiolist">
            <input type="radio" name="history" checked />
            <div>All</div>
          </label>
          <label class="radiolist">
            <input type="radio" name="history" />
            <div>Collected</div>
          </label>
          <label class="radiolist">
            <input type="radio" name="history" />
            <div>Uncollected</div>
          </label>
        </div>

        <FilterAll />
      </div>
    </div>
  </div>
</template>

<style scoped>
.rounds,
.PNL {
  background-color: rgb(122, 110, 170);
  border-radius: 16px;
}

.radiolist {
  display: flex;
  justify-content: center;
  align-items: center;
}

.history {
  animation: close 3s forwards linear;
  overflow: hidden;
}
@keyframes close {
  0% {
    width: 100%;
  }
  100% {
    width: 0%;
  }
}
</style>
