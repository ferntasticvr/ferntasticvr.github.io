// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  server: {
    allowedHosts: true
  },
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Funnel Sans",
      cssVariable: "--font-funnel-sans",
      weights: ["300 800"]
    }
  ]
});
