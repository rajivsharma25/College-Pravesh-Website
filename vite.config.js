// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/College-Pravesh-Website/', // <-- REPO NAME here
  plugins: [react()],
});
