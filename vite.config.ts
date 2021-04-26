import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import WindiCSS from 'vite-plugin-windicss';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    WindiCSS(),
  ],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(path.resolve(__dirname), 'src') }
    ]
  },
  build: {
    manifest: true
  },
  optimizeDeps: {
    include: [
      'vue',
      'vue-router',
    ],
  },
});
