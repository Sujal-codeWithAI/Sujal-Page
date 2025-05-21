import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
    port: 4000,
    strictPort: true,
    open: false,
    proxy: {},
    cors: true,
    historyApiFallback: true
  },
  preview: {
    host: true,
    port: 8080,
    strictPort: true,
    cors: true,
  },
  plugins: [
    react({
      jsxRuntime: 'automatic',
      jsxImportSource: 'react'
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
