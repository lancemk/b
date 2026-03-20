import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Set the base path based on the environment
  // Production uses '/b/' as per your server requirement
  const isProduction = mode === "production";
  const base = isProduction ? "/b" : "/";

  return {
    base: base,
    server: {
      host: "::",
      port: 8080,
      hmr: {
        overlay: false,
      },
    },
    plugins: [
      react(),
      // Custom plugin to check for development mode is cleaner via filter
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      // Ensures assets are placed correctly relative to the base
      outDir: "dist",
      assetsDir: "assets",
      // Generate manifest for better integration if needed
      manifest: true,
    },
  };
});
