// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://astro.build/config
export default defineConfig({
  site: 'https://intercore-intech.com',
  integrations: [react(), sitemap()],

  vite: {
    plugins: [
      tailwindcss(),
      ViteImageOptimizer({
        png: {
          quality: 80,
        },
        jpeg: {
          quality: 80,
        },
        jpg: {
          quality: 80,
        },
        webp: {
          quality: 80,
        },
        avif: {
          quality: 70,
        },
      }),
    ]
  }
});