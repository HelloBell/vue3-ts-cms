// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///D:/Learn/Learn%20Develop/Learn%20Web/Vue/Projects/vue3-ts-cms/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/Learn/Learn%20Develop/Learn%20Web/Vue/Projects/vue3-ts-cms/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import AutoImport from "file:///D:/Learn/Learn%20Develop/Learn%20Web/Vue/Projects/vue3-ts-cms/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///D:/Learn/Learn%20Develop/Learn%20Web/Vue/Projects/vue3-ts-cms/node_modules/unplugin-vue-components/dist/vite.js";
import { ElementPlusResolver } from "file:///D:/Learn/Learn%20Develop/Learn%20Web/Vue/Projects/vue3-ts-cms/node_modules/unplugin-vue-components/dist/resolvers.js";
import {
  createStyleImportPlugin,
  ElementPlusResolve
} from "file:///D:/Learn/Learn%20Develop/Learn%20Web/Vue/Projects/vue3-ts-cms/node_modules/vite-plugin-style-import/dist/index.mjs";
var __vite_injected_original_import_meta_url = "file:///D:/Learn/Learn%20Develop/Learn%20Web/Vue/Projects/vue3-ts-cms/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    }),
    createStyleImportPlugin({
      resolves: [ElementPlusResolve()],
      libs: [
        {
          libraryName: "element-plus",
          esModule: true,
          resolveStyle: (name) => {
            return `element-plus/theme-chalk/${name}.css`;
          }
        }
      ]
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxMZWFyblxcXFxMZWFybiBEZXZlbG9wXFxcXExlYXJuIFdlYlxcXFxWdWVcXFxcUHJvamVjdHNcXFxcdnVlMy10cy1jbXNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXExlYXJuXFxcXExlYXJuIERldmVsb3BcXFxcTGVhcm4gV2ViXFxcXFZ1ZVxcXFxQcm9qZWN0c1xcXFx2dWUzLXRzLWNtc1xcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovTGVhcm4vTGVhcm4lMjBEZXZlbG9wL0xlYXJuJTIwV2ViL1Z1ZS9Qcm9qZWN0cy92dWUzLXRzLWNtcy92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IGZpbGVVUkxUb1BhdGgsIFVSTCB9IGZyb20gJ25vZGU6dXJsJ1xuXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tICd1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlJ1xuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZSdcbmltcG9ydCB7IEVsZW1lbnRQbHVzUmVzb2x2ZXIgfSBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy9yZXNvbHZlcnMnXG5pbXBvcnQge1xuICBjcmVhdGVTdHlsZUltcG9ydFBsdWdpbixcbiAgRWxlbWVudFBsdXNSZXNvbHZlXG59IGZyb20gJ3ZpdGUtcGx1Z2luLXN0eWxlLWltcG9ydCdcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICB2dWUoKSxcbiAgICBBdXRvSW1wb3J0KHtcbiAgICAgIHJlc29sdmVyczogW0VsZW1lbnRQbHVzUmVzb2x2ZXIoKV1cbiAgICB9KSxcbiAgICBDb21wb25lbnRzKHtcbiAgICAgIHJlc29sdmVyczogW0VsZW1lbnRQbHVzUmVzb2x2ZXIoKV1cbiAgICB9KSxcbiAgICBjcmVhdGVTdHlsZUltcG9ydFBsdWdpbih7XG4gICAgICByZXNvbHZlczogW0VsZW1lbnRQbHVzUmVzb2x2ZSgpXSxcbiAgICAgIGxpYnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGxpYnJhcnlOYW1lOiAnZWxlbWVudC1wbHVzJyxcbiAgICAgICAgICBlc01vZHVsZTogdHJ1ZSxcbiAgICAgICAgICByZXNvbHZlU3R5bGU6IChuYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBgZWxlbWVudC1wbHVzL3RoZW1lLWNoYWxrLyR7bmFtZX0uY3NzYFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0pXG4gIF0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ0AnOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vc3JjJywgaW1wb3J0Lm1ldGEudXJsKSlcbiAgICB9XG4gIH1cbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQStXLFNBQVMsZUFBZSxXQUFXO0FBRWxaLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUNoQixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLGdCQUFnQjtBQUN2QixTQUFTLDJCQUEyQjtBQUNwQztBQUFBLEVBQ0U7QUFBQSxFQUNBO0FBQUEsT0FDSztBQVZnTyxJQUFNLDJDQUEyQztBQWF4UixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsSUFDSixXQUFXO0FBQUEsTUFDVCxXQUFXLENBQUMsb0JBQW9CLENBQUM7QUFBQSxJQUNuQyxDQUFDO0FBQUEsSUFDRCxXQUFXO0FBQUEsTUFDVCxXQUFXLENBQUMsb0JBQW9CLENBQUM7QUFBQSxJQUNuQyxDQUFDO0FBQUEsSUFDRCx3QkFBd0I7QUFBQSxNQUN0QixVQUFVLENBQUMsbUJBQW1CLENBQUM7QUFBQSxNQUMvQixNQUFNO0FBQUEsUUFDSjtBQUFBLFVBQ0UsYUFBYTtBQUFBLFVBQ2IsVUFBVTtBQUFBLFVBQ1YsY0FBYyxDQUFDLFNBQWlCO0FBQzlCLG1CQUFPLDRCQUE0QixJQUFJO0FBQUEsVUFDekM7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssY0FBYyxJQUFJLElBQUksU0FBUyx3Q0FBZSxDQUFDO0FBQUEsSUFDdEQ7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
