import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  // Use environment variable to set base URL
  // For Cloudflare Pages: set VITE_BASE_URL=/ in build environment variables
  // For GitHub Pages: leave unset (defaults to /awsolutions/)
  const base = process.env.VITE_BASE_URL || (command === 'build' ? '/awsolutions/' : '/');
  
  return {
    base,
    plugins: [react()],
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
  };
});
