import { defineConfig } from 'vite';
import { resolve } from 'path';
import liveReload from 'vite-plugin-live-reload';

export default defineConfig({
  root: 'preview',
  publicDir: resolve(__dirname, 'dist'),
  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: false, // Keep style-dictionary output (css, js, etc.)
  },
  plugins: [
    liveReload(['dist/**/*.css', 'dist/**/*.js'], { root: __dirname }),
  ],
  server: {
    port: 5173,
    open: true,
  },
});
