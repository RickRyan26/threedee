import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
  build: {
    rollupOptions: {
      external: ['@dimforge/rapier3d-compat']
    }
  },
  server: {
    // configure vite for HMR with Gitpod
    hmr: process.env.GITPOD_WORKSPACE_URL
      ? {
          // removes the protocol and replaces it with the port we're connecting to
          host: process.env.GITPOD_WORKSPACE_URL.replace('https://', '5173-'),
          protocol: 'wss',
          clientPort: 443
        }
      : true
  }
};
export default config;
