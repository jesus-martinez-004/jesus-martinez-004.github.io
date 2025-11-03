import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // ✅ Archivos con nombre fijo sin hash
        entryFileNames: "assets/index.js",
        chunkFileNames: "assets/[name].js",
        assetFileNames: ({ name }) => {
          if (name && name.endsWith(".css")) return "assets/index.css";
          return "assets/[name][extname]";
        },
      }
    }
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
