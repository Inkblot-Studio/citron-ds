import { defineConfig } from 'vite';
import { resolve } from 'path';
import liveReload from 'vite-plugin-live-reload';

export default defineConfig({
  root: 'preview',
  publicDir: resolve(__dirname, 'dist'),
  plugins: [
    liveReload(['dist/**/*.css', 'dist/**/*.js'], { root: __dirname }),
  ],
  server: {
    port: 5173,
    open: true,
  },
});
