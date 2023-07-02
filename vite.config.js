
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'

const customElements = [
  'graph-line',
  'guideline',
  'legends',
  'lottie-player',
  'note',
  'tooltip',
]

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: './docs',
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "./src/styles/_variables.scss" as *;`,
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
