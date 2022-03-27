<script lang="ts" setup>
import { JsonRpcSigner } from '@ethersproject/providers'
import WalletConnectProvider from '@walletconnect/web3-provider'
import { ethers } from 'ethers'
import { markRaw, onMounted, provide, reactive, ref, unref, watch, watchEffect } from 'vue'
import Web3Modal from 'web3modal'
import { Web3ContextType, Web3ProviderContextKey } from './type'

const { infuraId, extraWalletProviders, network: networkProps } = defineProps({
  network: {
    type: Number,
    default: 0,
  },
  infuraId: {
    type: String,
    default: '',
  },
  extraWalletProviders: {
    type: Array,
    default: () => [],
  },
})


let signer = ref<JsonRpcSigner | null>(null)
let provider = ref<ethers.providers.Web3Provider | null>(null)
const userAddress = ref<string | null>(null)
const chainId = ref<number | null>(null)
const connected = ref<boolean>(false)
const correctNetwork = ref<boolean>(false)
const network = ref<number>(0)
let web3Modal: Web3Modal | null = (null)

const disconnectWallet = () => {
  web3Modal?.clearCachedProvider()
  signer.value = null
  userAddress.value = null
  connected.value = false
}

const connectWallet = async () => {
  const defaulProviderOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        bridge: 'https://polygon.bridge.walletconnect.org',
        infuraId,
        rpc: {
          1: `https://eth-mainnet.alchemyapi.io/v2/${infuraId}`, // mainnet // For more WalletConnect providers: https://docs.walletconnect.org/quick-start/dapps/web3-provider#required
          42: `https://kovan.infura.io/v3/${infuraId}`,
          100: 'https://dai.poa.network', // xDai
        },
      },
    },
  }

  web3Modal = new Web3Modal({
    providerOptions: Object.assign(
      defaulProviderOptions,
      ...extraWalletProviders
    ),
  })

  const connection = await web3Modal.connect()
  provider.value = markRaw(new ethers.providers.Web3Provider(connection))
  chainId.value = await provider.value
    .getNetwork()
    .then((network) => network.chainId)
  correctNetwork.value = chainId.value === networkProps
  signer.value = markRaw(provider.value.getSigner())
  userAddress.value = await signer.value.getAddress()
  connected.value = true

  connection.on('chainChanged', async (newChainId: string) => {
    const formattedChainId = +newChainId.split('0x')[1]
    chainId.value = formattedChainId
    correctNetwork.value = formattedChainId === networkProps
    provider.value = markRaw(new ethers.providers.Web3Provider(connection))
    signer.value = provider.value.getSigner()
    userAddress.value = await signer.value.getAddress()
    connected.value = true
  })
  connection.on('accountsChanged', async (accounts: string[]) => {
    if (accounts.length === 0) {
      // The user has disconnected their account from Metamask
      web3Modal?.clearCachedProvider()
      disconnectWallet()
      return
    }
    provider.value = markRaw(new ethers.providers.Web3Provider(connection))
    chainId.value = await provider.value
      .getNetwork()
      .then((network) => network.chainId)

    correctNetwork.value = chainId.value === networkProps
    signer.value = markRaw(provider.value.getSigner())
    userAddress.value = await signer.value.getAddress()
    connected.value = true
  })

  connection.on('disconnect', async () => {
    web3Modal?.clearCachedProvider()
    disconnectWallet()
  })
}

provide(Web3ProviderContextKey, {
  signer,
  provider,
  userAddress,
  chainId,
  connected,
  correctNetwork,
  network,
  connectWallet,
  disconnectWallet,
})
</script>

<template>
  <slot />
</template>
