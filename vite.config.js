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
        "camper-service/piatto-di-scarico": resolve(__dirname, 'camper-service/piatto-di-scarico/index.html'),
        "ricarica-elettrica-camper": resolve(__dirname, 'ricarica-elettrica-camper/index.html'),
        "ricarica-elettrica-ebike": resolve(__dirname, 'ricarica-elettrica-ebike/index.html'),
        "controllo-accessi": resolve(__dirname, 'controllo-accessi/index.html'),
        "frangivista-differenziata": resolve(__dirname, 'frangivista-differenziata/index.html'),
      },
    },
  },
})