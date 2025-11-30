import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      // Use relative base paths for production so the site can be served
      // from GitHub Pages or other static hosts without requiring an
      // absolute root path. Dev server stays at '/'.
      base: process.env.NODE_ENV === 'production' ? './' : '/',
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      build: {
        minify: 'terser',
        terserOptions: {
          compress: {
            drop_console: true,
            drop_debugger: true,
          },
        },
        rollupOptions: {
          output: {
            manualChunks: {
              'framer-motion': ['framer-motion'],
              'lucide-react': ['lucide-react'],
            },
          },
        },
        target: 'ES2020',
        sourcemap: false,
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});

