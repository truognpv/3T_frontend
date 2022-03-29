<script lang="ts" setup>
import { useWallet } from '../hooks/useWallet'

const { connectWallet, connected, disconnectWallet, userAddress } = useWallet()
</script>

<template>
  <button
    @click="connected ? disconnectWallet?.() : connectWallet?.()"
    class="bg-[#1fc7d4] rounded-2xl text-white font-semibold px-4 h-8"
  >
    {{ connected ? userAddress : 'Connect wallet' }}
  </button>
</template>
