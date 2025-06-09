import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

const version = Date.now()

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @use "@/assets/styles/_media.scss" as *;
        @use "@/assets/styles/_variables.scss" as *;
      `,
      },
    },
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name]-${version}.js`,
        chunkFileNames: `assets/[name]-${version}.js`,
        assetFileNames: `assets/[name]-${version}.[ext]`,
      },
    },
  },
})
