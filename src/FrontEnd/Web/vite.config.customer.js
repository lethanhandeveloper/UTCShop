import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, path.resolve(__dirname));

  return {
    root: path.resolve(__dirname, "portals/customer"),
    plugins: [react()],
    publicDir: path.resolve(__dirname, "portals/customer/public"),
    envDir: path.resolve(__dirname),
    server: {
      port: 8002,
      strictPort: true,
    },
    build: {
      outDir: path.resolve(__dirname, "dist/customer"),
      emptyOutDir: true,
      assetsDir: "assets"
    }
  };
});
