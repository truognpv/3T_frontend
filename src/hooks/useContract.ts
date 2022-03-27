import { Contract } from 'ethers'
import { Web3ProviderContextKey } from '../provide/type'
import { inject, markRaw, onMounted, ref, unref, watchEffect } from 'vue'

export function useContract(address: string, abi: any) {
  const context = inject(Web3ProviderContextKey)
  const contract = ref<any>({})
  const isReady = ref(false)

  watchEffect(() => {
    if (context?.connected) {
      const newContract = markRaw(
        new Contract(address, abi, context.signer.value || undefined)
      )
      const contractInterface = markRaw(
        Object.values(newContract.interface.functions).reduce(
          (accumulator, funcFragment) => {
            return {
              ...accumulator,
              [funcFragment.name]: newContract[funcFragment.name],
            }
          },
          {}
        )
      )
      contract.value = contractInterface
      isReady.value = true
    }
  })
  return {
    contract,
    isReady,
  }
}
