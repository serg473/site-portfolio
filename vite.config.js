import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import svgLoader from "vite-svg-loader";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), svgLoader()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    minify: "esbuild", // Минификация JavaScript
    cssMinify: "lightningcss", // Минификация CSS с использованием Lightning CSS
  },
});
