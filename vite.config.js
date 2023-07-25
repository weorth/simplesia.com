
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'

const customElements = [
  'lottie-player',
]

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: './docs',
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "./src/styles/include.scss" as *;`,
      },
    },
  },
  plugins: [
    vue({
      build: {
        viteVuePluginOptions: {
          template: {
            compilerOptions: {
              isCustomElement: (tag) => customElements.includes(tag),
            },
          },
        },
      },
      template: {
        compilerOptions: {
          isCustomElement: (tag) => customElements.includes(tag),
        },
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
