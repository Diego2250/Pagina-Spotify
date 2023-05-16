import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

export default defineConfig({
  plugins: [reactRefresh()],
  test: {
    setupFiles: "./src/setupTests.js",
    globals: true,
    environment: "jsdom",
  },
})
