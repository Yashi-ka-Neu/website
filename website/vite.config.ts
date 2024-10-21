import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import {viteStaticCopy} from "vite-plugin-static-copy";


const useWebsiteBasePath = process.env.USE_WEBSITE_BASE_PATH === 'true';

// https://vite.dev/config/
export default defineConfig({
  base: useWebsiteBasePath ? '/website/' : '/',
  plugins: [
    vue(),
    vueDevTools(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/assets/**/*',
          dest: 'assets'
        }
      ]
    })
  ],
  build: {
    outDir: 'dist',
    minify: false,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
