import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/year-timeline-card.ts'),
      name: 'YearTimelineCard',
      formats: ['iife'],
      fileName: () => 'year-timeline-card.js',
    },
    outDir: 'dist',
    emptyDirOnBuild: true,
    sourcemap: false,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
      },
    },
  },
});
