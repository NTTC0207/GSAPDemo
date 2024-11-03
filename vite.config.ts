import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// @ts-ignore
import eslint from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [react(),
  eslint(),
  ],
})
