import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use relative paths so Capacitor's file:// protocol works correctly
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Ensure sourcemaps for debugging
    sourcemap: false,
    // Optimize for mobile WebView
    target: 'es2020',
    minify: 'esbuild',
    cssMinify: true,
    rollupOptions: {
      output: {
        // Chunk splitting for better caching
        manualChunks: {
          vendor: ['react', 'react-dom'],
          motion: ['framer-motion'],
        },
      },
    },
  },
})
