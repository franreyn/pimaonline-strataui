import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [tsconfigPaths()],
  build: {
    outDir: '../dist',
    assetsDir: 'assets',
    // rollupOptions is used to remove hashes from file names
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`
      }
    }
  },
  root: './src',
  server: {
    host: true,
    port: 5173,
    hmr: { clientPort: 5173 }
  }
});