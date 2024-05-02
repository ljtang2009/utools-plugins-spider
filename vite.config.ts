import { defineConfig } from 'vite';
import { join } from 'desm';

const entry = join(import.meta.url, 'src/index.ts');

export default defineConfig({
  resolve: {
    alias: {
      '@': join(import.meta.url, 'src'),
    },
  },
  build: {
    outDir:    join(import.meta.url, 'dist'),
    sourcemap: true,
    lib:       {
      entry,
      name:    'LintConfig',
      formats: ['cjs'],
    },
    rollupOptions: {
      external: [
      ],
      output: {
        globals: {
        },
      },
    },
    ssr:         true,
    minify:      false,
    emptyOutDir: false,
  },
});
