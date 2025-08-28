import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "node:path"
import tailwindcss from "@tailwindcss/vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true,       // Listen on all addresses, not just localhost
    port: 5173,       // Optional: specify port
    strictPort: false, // Optional: fail if port is taken
  },
  build: {
    outDir: "dist"
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
