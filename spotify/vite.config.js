import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    emptyOutDir: true,
    ssr: false,
    rollupOptions: {
      input: "src/App.jsx",
      output: {
        format: "es",
      },
    },
  },
});
