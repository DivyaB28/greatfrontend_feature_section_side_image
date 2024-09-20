import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",

  // root: "./index.html",
  // build: {
  //   outDir: "../dist",
  //   emptyOutDir: true,
  //   rollupOptions: {
  //     input: {
  //       right: "./right",
  //     },
  //   },
  // },
});
