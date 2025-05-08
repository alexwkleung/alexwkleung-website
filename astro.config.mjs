import { defineConfig } from "astro/config";
import icon from "astro-icon";

export default defineConfig({
  integrations: [icon()],
  server: {
    port: 3000,
  },
  devToolbar: {
    enabled: false,
  },
});
