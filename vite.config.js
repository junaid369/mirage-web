import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/mirage-web/",
  plugins: [react()],
});

// import { defineConfig } from 'vite';

// export default defineConfig({
//   base: '/mirage-web/', // This should match the path in your `homepage` field
//   build: {
//     outDir: 'dist', // Ensure this matches your `deploy` script
//   },
// });
