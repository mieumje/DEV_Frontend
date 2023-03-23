import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      {
        find: '@components/*',
        replacement: path.resolve(__dirname, 'src/components/*'),
      },
      {
        find: '@layout/*',
        replacement: path.resolve(__dirname, 'src/layout/*'),
      },
      {
        find: '@pages/*',
        replacement: path.resolve(__dirname, 'src/pages/*'),
      },
      {
        find: '@apis/*',
        replacement: path.resolve(__dirname, 'src/apis/*'),
      },
      {
        find: '@utils/*',
        replacement: path.resolve(__dirname, 'src/utils/*'),
      },
      {
        find: '@assets/*',
        replacement: path.resolve(__dirname, 'src/assets/*'),
      },
      {
        find: '@hooks/*',
        replacement: path.resolve(__dirname, 'src/hooks/*'),
      },
      {
        find: '@router/*',
        replacement: path.resolve(__dirname, 'src/router/*'),
      },
      {
        find: '@interfaces/*',
        replacement: path.resolve(__dirname, 'src/interfaces/*'),
      },
    ],
  },
});
