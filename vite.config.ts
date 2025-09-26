import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "@/components": resolve(__dirname, "src/components"),
      "@/hooks": resolve(__dirname, "src/hooks"),
      "@/types": resolve(__dirname, "src/types"),
      "@/utils": resolve(__dirname, "src/utils"),
    },
  },
  preview: {
    port: 5001,
    host: "0.0.0.0",
    allowedHosts: ["task-dashboard.apphostcloud.link"],
  },
});
