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
        entryFileNames: `js/[name].js`,
        chunkFileNames: `js/[name].js`,
        assetFileNames: `css/[name].[ext]`
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