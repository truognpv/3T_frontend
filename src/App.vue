<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

import Web3Provider from './provide/Provider.vue'
import { NETWORKS } from './constants'
</script>

<template>
  <Web3Provider :network="NETWORKS.BSC">
    <router-view />
  </Web3Provider>
</template>
<style>
#app {
  font-family: 'Kanit', sans-serif;
}
</style>
