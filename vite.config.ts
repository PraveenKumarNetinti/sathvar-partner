import path from "path";
import tailwindcss from "@tailwindcss/vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react-swc";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig, type PluginOption } from "vite";
import ViteImagemin from "vite-plugin-imagemin";
import { VitePWA } from "vite-plugin-pwa";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    TanStackRouterVite({ autoCodeSplitting: true }),
    react(),
    visualizer() as PluginOption,
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: [
        "favicon.ico",
        "apple-touch-icon.png",
        "pwa-maskable-512x512.png",
      ],
      manifest: {
        name: "Sathvar Partner",
        short_name: "Sathvar Partner",
        description:
          "Automated Accounting & Tax compliance. Get your Accounting and Compliance done with just Drag and Drop",
        display: "fullscreen",
        background_color: "#FFFFFF",
        theme_color: "#FFFFFF",
        display_override: ["fullscreen", "standalone"],
        scope: "/",
        id: ".",
        start_url: "/",
        orientation: "landscape",
        icons: [
          {
            src: "/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/apple-touch-icon.png",
            sizes: "180x180",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/pwa-maskable-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "/pwa-maskable-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
        // categories: [
        //   "accounting software",
        //   "enterprise software",
        //   "online accounting",
        //   "digital office",
        //   "gst",
        //   "tds",
        //   "income tax",
        //   "financial reporting",
        //   "inventory",
        //   "fixed assets",
        //   "digital signatures",
        //   "docs",
        // ],
        // shortcuts: [
        //   {
        //     name: "Reports",
        //     short_name: "Reports",
        //     description:
        //       "View and analyze your financial data with comprehensive insights and summaries.",
        //     url: "/reports",
        //   },
        // ],
      },
    }),
    ViteImagemin(),
    svgr({
      // svgr options: https://react-svgr.com/docs/options/
      svgrOptions: {
        exportType: "default",
        ref: true,
        memo: true,
        svgo: false,
        titleProp: true,
        expandProps: "end",
      },
      include: "**/*.svg",
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            const libraries = [
              { name: "axios", match: ["axios"] },
              { name: "framer-motion", match: ["framer-motion"] },
              { name: "tailwind-merge", match: ["tailwind-merge"] },
              { name: "react", match: ["react", "react-dom"] },
            ];

            for (const lib of libraries) {
              if (lib.match.some((m) => id.includes(m))) return lib.name;
            }
            return "vendor"; // Split other vendor libraries
          }

          if (id.includes("src/components/")) return "components"; // Split components into their own chunk
        },
      },
    },
  },
});
