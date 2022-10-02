import vercel from '@sveltejs/adapter-vercel';
// import { imagetools } from 'vite-imagetools';

const config = {
  kit: {
    adapter: vercel(),
    // adapter: adapter({
    // 	// default options are shown
    // 	pages: 'build',
    // 	assets: 'build',
    // 	fallback: null,
    // }),
    version: {
      name: Date.now().toString(),
      pollInterval: 5 * 60 * 1000
    }
  }
};

export default config;
