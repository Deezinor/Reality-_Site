import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@styles': path.resolve(__dirname, './src/styles'),
      '@pages': path.resolve(__dirname, './src/pages'),
    },
  },
  css: {
    postcss: "./postcss.config.cjs",
    preprocessorOptions: {
      less: {
        math: "parens-division",
      },
      scss: {
        api: "modern-compiler",
      },
    },
  },
  build: {
    rollupOptions: {
      input: {
        // main: path.resolve(__dirname, 'index.html'),
        home: path.resolve(__dirname, 'src/pages/home/index.html'),
        about: path.resolve(__dirname, 'src/pages/About/index.html'),
        beatbox: path.resolve(__dirname, 'src/pages/beatbox/index.html'),
        contact: path.resolve(__dirname, 'src/pages/contact/index.html'),
      },
    },
  },
});
