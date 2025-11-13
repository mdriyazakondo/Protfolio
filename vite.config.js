import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import prerender from "vite-plugin-prerender";

// Vite config
export default defineConfig({
  plugins: [
    react(), // React plugin ekbar matro
    prerender({
      staticDir: "dist", // build output folder
      routes: ["/"], // jei pages Google e index korte chan
      // Example: routes: ["/", "/about", "/projects"]
    }),
  ],
  css: {
    postcss: {
      plugins: [
        require("tailwindcss"), // Tailwind CSS v4.2 plugin
        require("autoprefixer"),
      ],
    },
  },
});
