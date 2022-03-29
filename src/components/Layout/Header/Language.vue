<script lang="ts" setup>
import { ref } from 'vue'
const showLanguage = ref(false)
</script>

<template>
  <div>
    <div @mouseover="showLanguage = true" @mouseleave="showLanguage = false">
      <button class="pt-2 hover:opacity-75">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-world"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="rgb(122, 110, 170)"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="12" cy="12" r="9" />
          <line x1="3.6" y1="9" x2="20.4" y2="9" />
          <line x1="3.6" y1="15" x2="20.4" y2="15" />
          <path d="M11.5 3a17 17 0 0 0 0 18" />
          <path d="M12.5 3a17 17 0 0 1 0 18" />
        </svg>
      </button>
      <ul
        class="w-[200px] bg-white flex flex-col items-center justify-center lgg p-2"
        v-if="showLanguage"
      >
        <li><button>A</button></li>
        <li><button>A</button></li>
        <li><button>A</button></li>
        <li><button>A</button></li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.lgg {
  transform: translate3d(-85px, 0px, 0px);
  position: fixed;
}
</style>
