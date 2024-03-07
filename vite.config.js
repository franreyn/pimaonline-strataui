import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [tsconfigPaths()],
  build: { outDir: '../dist' },
  root: './src',
  server: {
    host: true,
    port: 5173,
    hmr: { clientPort: 5173 }
  }
});