import { resolve } from "path";
import react from "@vitejs/plugin-react";
import dts from "unplugin-dts/vite";
import { defineConfig, UserConfig as UserConfigVite } from "vite";
import { UserConfig as InlineConfigVitest } from "vitest/config";
import pkg from "./package.json" with { type: "json" };

type UserConfig = UserConfigVite & {
  test: InlineConfigVitest["test"];
};

const config: UserConfig = {
  build: {
    lib: {
      entry: {
        colors: resolve(import.meta.dirname, "colors/main.ts"),
        main: resolve(import.meta.dirname, "src/main.ts"),
      },
      fileName: "[name]",
      name: pkg.name,
    },
    minify: "esbuild",
    rolldownOptions: {
      external: [...Object.keys(pkg.dependencies), ...Object.keys(pkg.peerDependencies), "react/jsx-runtime", "react/jsx-dev-runtime"],
      output: {
        globals: {
          "@mui/material": "material",
          "@getsoren/react-utils": "TracktorReactUtils",
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  plugins: [
    dts({
      exclude: [
        "**/*.test.ts",
        "**/*.test.tsx",
        "**/stories/**/*",
        "**/*.stories.tsx",
        "**/*.stories.ts",
        "vite.config.ts",
        "test.config.ts",
      ],
    }),
    react(),
  ],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: resolve(import.meta.dirname, "src"),
      },
    ],
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "test.config.ts",
  },
};

export default defineConfig(config);
