import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/Ad-Projects/",
  plugins: [react()],
  server: {
    host: true,
    port: 4000,
    strictPort: true,
    watch: {
      usePolling: true,
    },
    allowedHosts: ['.ngrok-free.app'], // optional for backend dev tunneling
  },
});
