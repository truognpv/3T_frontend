<script lang="ts" setup>
import { useWallet } from '../hooks/useWallet'

const { connectWallet, connected, disconnectWallet, userAddress } = useWallet()

</script>

<template>
  <button
    @click="connected ? disconnectWallet?.() : connectWallet?.()"
    class="bg-orange-300 p-4 rounded"
  >
    {{
      connected ? userAddress : 'Connect wallet'
    }}
  </button>
</template>
