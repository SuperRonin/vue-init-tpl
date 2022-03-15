import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import Unocss from "unocss/vite";
const path = require("path");

export default defineConfig({
  resolve:{
    alias: {
      "~/": `${path.resolve(__dirname, "src")}/`,
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: "@use \"~/styles/element/index.scss\" as *;",
      },
    },
  },
  plugins: [
    vue(),
    AutoImport({
      imports: ["@vueuse/core", "vue"]
    }),
    Components({
      resolvers: [
        ElementPlusResolver({
          importStyle: "sass",
        })
      ]
    }),
    Unocss({  }),
  ]
});
