import { JsonRpcSigner } from '@ethersproject/providers/src.ts/json-rpc-provider'
import { ethers } from 'ethers'
import { InjectionKey, Ref } from 'vue'
import { IProviderOptions } from 'web3modal'

export interface Web3ContextType {
  connectWallet?: () => void
  signer: Ref<JsonRpcSigner | null>
  userAddress: Ref<string | null>
  disconnectWallet?: () => void
  chainId: Ref<number | null>
  connected: Ref<boolean>
  provider: Ref<ethers.providers.Web3Provider | null>
  correctNetwork: Ref<boolean>
  network: Ref<number>
}

export interface ProviderProps {
  /**
   * @dev The network you want to connect to.
   * @example NETWORKS.mainnet
   * @type string
   */
  network: number
  /**
   * @dev Your Infura project ID. This is required if you want to support WalletConnect.
   * @type string
   */
  infuraId?: string
  /**
   * @dev An array of extra Wallet Providers you want to support.
   * @type [
      [id: string]: {
          package: any;
          options?: any;
          connector?: Connector;
          display?: Partial<IProviderDisplay>;
        };
      ]
   */
  extraWalletProviders?: [IProviderOptions]
}
export const Web3ProviderContextKey = Symbol() as InjectionKey<Web3ContextType>
