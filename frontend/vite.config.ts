import { defineConfig } from "vite";
// This plugin allows Tailwind CSS to work smoothly inside a Vite project.
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
//It enables Tailwind inside Vite
