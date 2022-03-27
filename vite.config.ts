import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), pages()],
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  define: {
    'process.env': {},
  },
  resolve: {
    alias: {
      '@walletconnect/web3-provider':
        '@walletconnect/web3-provider/dist/umd/index.min.js',
    },
  },
})
