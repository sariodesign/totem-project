// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        "camper-service": resolve(__dirname, 'camper-service/index.html'),
        "camper-service/colonnina-multifunzione": resolve(__dirname, 'camper-service/colonnina-multifunzione/index.html'),
      },
    },
  },
})