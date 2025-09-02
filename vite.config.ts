import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import tailwindcss from "@tailwindcss/vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@/components": path.resolve(__dirname, "./src/components"),
      "@/modules": path.resolve(__dirname, "./src/modules"),
      "@/routers": path.resolve(__dirname, "./src/routers"),
      "@/stories": path.resolve(__dirname, "./src/stories"),
      "@/assets": path.resolve(__dirname, "./src/assets"),
      "@/common": path.resolve(__dirname, "./src/common"),
      "@/styles": path.resolve(__dirname, "./src/styles")
    },
  }
})
