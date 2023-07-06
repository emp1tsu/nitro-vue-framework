import { NitroConfig, createDevServer } from "nitropack";
import vuePlugin from "@vitejs/plugin-vue";
import { defineLazyEventHandler, fromNodeMiddleware } from "h3";
import { createServer } from "vite";

export default {
  handlers: [
    {
      route: "/**",
      handler: "./app/server",
    },
  ],
  devHandlers: [
    {
      route: "/__vite",
      handler: defineLazyEventHandler(async () => {
        const server = await createServer({
          base: "/__vite",
          appType: "custom",
          server: {
            middlewareMode: true,
          },
          plugins: [vuePlugin()],
        });
        return fromNodeMiddleware(server.middlewares);
      }),
    },
  ],
  rollupConfig: {
    plugins: [vuePlugin()],
  },
} satisfies NitroConfig;
