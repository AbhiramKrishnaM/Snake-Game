import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  server: {
    port: 3000,
    strictPort: true,
  },

  optimizeDeps: {
    include: ["highlight.js", "highlight.js/lib/core"],
  },

  resolve: {
    alias: {
      "@": "/src",
      "~": "/public",
    },
  },
});
