import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@bootwind/common": path.resolve(__dirname, "./packages/common/src/index.ts")
    }
  }
})
