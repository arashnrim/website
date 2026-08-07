import { defineConfig, fontProviders } from "astro/config";

import vercel from "@astrojs/vercel";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://arash.codes",
  fonts: [
    {
      provider: fontProviders.local(),
      name: "General Sans",
      cssVariable: "--font-general-sans",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/GeneralSans-Variable.woff2"],
            weight: "500 700",
            style: "normal",
          },
          {
            src: ["./src/assets/fonts/GeneralSans-VariableItalic.woff2"],
            weight: "500 700",
            style: "italic",
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: "JetBrains Mono",
      cssVariable: "--font-jetbrains-mono",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/JetBrainsMono-Variable.woff2"],
            weight: "400 800",
            style: "normal",
          },
          {
            src: ["./src/assets/fonts/JetBrainsMono-VariableItalic.woff2"],
            weight: "400 800",
            style: "italic",
          },
        ],
      },
    },
  ],
  compressHTML: true,
  integrations: [icon()],
  adapter: vercel(),
  redirects: {
    "/blog": {
      status: 301,
      destination: "https://blog.arash.codes",
    },
    "/guestbook": {
      status: 301,
      destination: "https://guestbook.arash.codes",
    },
  },
});
