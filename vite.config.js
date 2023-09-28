import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import * as path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.VUE_APP_PUBLIC_PATH,
  plugins: [vue()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          moment: ['moment'],
          'moment-jalaali': ['moment-jalaali'],
        },
      },
    },
  },
  css: {
    sourceMap: process.env.NODE_ENV !== 'production',
    extract: false,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
