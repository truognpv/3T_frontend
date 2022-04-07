<script setup lang="ts">
import FilterAll from './Filter/FilterAll.vue'
import { ref } from 'vue'
import Collected from './Filter/Collected.vue'
import UnCollected from './Filter/UnCollected.vue'
import Yourhistory from './Yourhistory.vue'
const isBg = ref(true)

const isFilter = ref('all')
</script>

<template>
  <div class="flex justify-end">
    <div class="w-96 hde">
      <div class="flex items-center justify-between mb-4">
        <h1>History</h1>
        <button class="flex" @click="$emit('onClose')">
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

      <div class="flex justify-between mb-4 border-2 items-centers rounded-2xl">
        <button
          class="w-1/2 text-center rounds"
          :class="{ 'is-bg': isBg }"
          @click="isBg = true"
        >
          Rounds
        </button>
        <button
          class="w-1/2 text-center PNL"
          :class="{ 'is-bg': !isBg }"
          @click="isBg = false"
        >
          PNL
        </button>
      </div>

      <div v-if="isBg === true">
        <small class="mb-2">Filter</small>
        <div class="flex gap-5">
          <label class="radiolist" @click="isFilter = 'all'">
            <input type="radio" name="history" checked />
            <div>All</div>
          </label>
          <label class="radiolist" @click="isFilter = 'collected'">
            <input type="radio" name="history" />
            <div>Collected</div>
          </label>
          <label class="radiolist" @click="isFilter = 'uncollected'">
            <input type="radio" name="history" />
            <div>Uncollected</div>
          </label>
        </div>
      </div>
    </div>
  </div>
  <div v-if="isBg === true">
    <FilterAll v-if="isFilter === 'all'" />
    <Collected v-if="isFilter === 'collected'" />
    <UnCollected v-if="isFilter === 'uncollected'" />
  </div>
  <div v-if="isBg === false">
    <Yourhistory />
  </div>
</template>

<style scoped>
.rounds,
.PNL {
  border-radius: 16px;
  padding: 6px;
}

.radiolist {
  display: flex;
  justify-content: center;
  align-items: center;
}

.hde {
  background: linear-gradient(
    139.73deg,
    rgb(229, 253, 255) 0%,
    rgb(243, 239, 255) 100%
  );
  padding: 16px;
}

.is-bg {
  background-color: rgb(122, 110, 170);
  color: rgb(255, 255, 255);
}
</style>
