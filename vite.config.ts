import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Ensures relative asset URLs so GitHub Pages loads without a blank screen
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
