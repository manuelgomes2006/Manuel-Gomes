import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages base URL for repo 'Manuel-Gomes'
  base: process.env.GITHUB_ACTIONS ? '/Manuel-Gomes/' : './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
