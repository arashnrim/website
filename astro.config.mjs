import { defineConfig } from "astro/config";

import vercel from "@astrojs/vercel";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [icon()],
  adapter: vercel(),
  redirects: {
    "/blog": {
      status: 301,
      destination: "https://blog.arash.codes",
    },
  },
});
