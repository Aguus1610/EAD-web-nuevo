import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://aguus1610.github.io',
  base: '/EAD-web-nuevo',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
