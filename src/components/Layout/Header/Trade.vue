<script setup lang="ts">
import TitleMenuList from './TitleMenuList.vue'
</script>

<template>
  <TitleMenuList url="swap" title="Trade">
    <div class="pt-1">
      <router-link to="swap">
        <h1 class="page hover:rounded-t-2xl">Swap</h1>
      </router-link>
    </div>

    <router-link to="limit"><h1 class="page">Limit</h1></router-link>
    <router-link to="swap"><h1 class="page">Liquidity</h1> </router-link>
    <a href="#">
      <div class="page hover:rounded-b-2xl">
        <h1 class="flex items-center justify-between">
          Perpetual
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-logout"
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
            <path
              d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"
            />
            <path d="M7 12h14l-3 -3m0 6l3 -3" />
          </svg>
        </h1>
      </div>
    </a>
  </TitleMenuList>
</template>

<style scoped>
h1 {
  padding: 16px;
}
.page:hover {
  background-color: #eff4f5;
}
</style>
