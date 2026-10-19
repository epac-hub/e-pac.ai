import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  base: '/',
  server: { host: '0.0.0.0', port: 3000, strictPort: true, allowedHosts: true },
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: isSsrBuild ? {} : {
      output: {
        manualChunks(id: string) {
          if (/\/node_modules\/(react|react-dom|scheduler)\//.test(id)) return 'react-runtime';
        },
      },
    },
  },
}));
