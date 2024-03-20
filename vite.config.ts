import { fileURLToPath, URL } from 'node:url';
import * as Vite from 'vite';
import vuePlugin from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default Vite.defineConfig({
  plugins: [
    vuePlugin(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
