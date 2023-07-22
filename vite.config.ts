import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      injectRegister: 'auto',
      manifest: {
        name: 'Febri Rolling Glory',
        short_name: 'Febri App',
        theme_color: '#ffffff',
        display: "standalone",
        icons: [
          {
            src: './assets/logo-dummy-997fde2f',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: './assets/logo-dummy-997fde2f',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }) as any,
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
