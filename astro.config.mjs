// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://603.nz',
  output: 'static',
  // One page and a 404, so there is nothing for a cached stylesheet to be
  // shared with. Inlining it saves the request that first paint waits on.
  // The content security policy allows inline styles (not inline scripts).
  build: { inlineStylesheets: 'always' },
});
