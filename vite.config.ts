import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js"; 

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    cssInjectedByJsPlugin({
      jsAssetsFilterFunction: (outputChunk) => {
        console.log('TESTE' , `\n${outputChunk.fileName}\n`)
        return !!outputChunk.fileName.match(/assets\/main-.*\.js/)
      }
    }),
  ],
  build: {
    manifest: true,
    rollupOptions: {
      input: [
        '/index.html',
        '/src/main.tsx'
      ]
    }
  }
})
