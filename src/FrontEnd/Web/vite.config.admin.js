import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// https://vite.dev/config/
export default defineConfig({
  root: path.resolve(__dirname, "portals/admin"),
  plugins: [react()],
  publicDir: path.resolve(__dirname, "portals/admin/public"),
  envDir: path.resolve(__dirname),
  base: "/",
  server: {
    port: 8001,
    strictPort: true,
  },
  build: {
    outDir: path.resolve(__dirname, "dist/admin"),
    emptyOutDir: true,
    assetsDir: "assets",
  },
});
