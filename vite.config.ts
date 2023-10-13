import { ConfigEnv, defineConfig, UserConfigExport } from "vite"
import react from "@vitejs/plugin-react-swc"
import { fileURLToPath } from "url"

const alias: Record<string, string> = {
  "@": fileURLToPath(new URL("./src", import.meta.url))
}

/**
 * @description-en vite document address
 * @description-cn vite官网
 * https://vitejs.cn/config/ */
const userConfigExport = ({ command }: ConfigEnv): UserConfigExport => {
  return {
    base: "./",
    resolve: {
      alias
    },
    server: {
      open: true,
      port: 8080,
      proxy: {
        // 代理配置
        "/dev-api": {
          target: "",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/dev-api/, "/api")
        },
        "/test-api": {
          target: "",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/test-api/, "/api")
        }
      }
    },
    build: {
      outDir: 'build',
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes("node_modules")) {
              return id
                .toString()
                .split("node_modules/")[1]
                .split("/")[0]
                .toString()
            }
          }
        }
      }
    },
    plugins: [react()],
    css: {
      preprocessorOptions: {
        less: {
          additionalData: `@import "${fileURLToPath(
            new URL("./src/theme/theme.module.less", import.meta.url)
          )}";`,
          javascriptEnabled: true
        }
      }
    }
  }
}
export default defineConfig(userConfigExport as UserConfigExport)

