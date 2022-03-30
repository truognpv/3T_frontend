<script setup lang="ts">
import { ref } from 'vue'
const mouseoverList = ref(false)
</script>

<template>
  <router-link to="info">
    <div @mouseleave="mouseoverList = false" @mouseover="mouseoverList = true">
      <button class="btn hover:bg-[#eff4f5] hover:rounded-2xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-dots"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="rgb(122, 110, 170)"
          fill=""
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="5" cy="12" r="1" />
          <circle cx="12" cy="12" r="1" />
          <circle cx="19" cy="12" r="1" />
        </svg>
      </button>
      <div class="border rounded-xl w-[280px] list" v-if="mouseoverList">
        <router-link to="/"
          ><h1 class="hover:rounded-t-2xl">Info</h1>
        </router-link>
        <router-link to="ifo"><h1>IFO</h1></router-link>
        <router-link to="voting"><h1>Voting</h1> </router-link>
        <router-link to="leaderboard"
          ><h1 class="border-y">Leaderboard</h1>
        </router-link>
        <a href="#"
          ><h1 class="flex justify-between">
            Blog
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
        </a>
        <a href="#"
          ><h1 class="flex justify-between hover:rounded-b-2xl">
            Docs
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
        </a>
      </div>
    </div>
  </router-link>
</template>

<style scoped>
.list {
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(231, 227, 235);
  width: 280px;
  position: fixed;
  inset: 0px auto auto 0px;
  transform: translate3d(450px, 55.4545px, 0px);
}
h1 {
  padding: 16px;
}
.btn {
  padding: 16px;
}
h1:hover {
  background-color: #eff4f5;
}
</style>
