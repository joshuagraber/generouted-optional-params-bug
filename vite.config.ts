import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import generouted from "@generouted/react-router/plugin";

export default defineConfig({
  plugins: [react(), generouted()],
  server: {
    // Allow all hosts in CodeSandbox
    hmr: {
      host: "localhost",
    },
    host: true,
    // Add allowed hosts
    allowedHosts: [
      "localhost",
      ".csb.app", // This will allow all CodeSandbox domains
    ],
  },
});
