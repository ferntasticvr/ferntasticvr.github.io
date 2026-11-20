// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import deno from "@deno/astro-adapter"

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: deno({
    port: 1298,
    hostname: "0.0.0.0"
  }),
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
