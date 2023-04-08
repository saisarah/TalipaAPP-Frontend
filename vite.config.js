import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from 'path'
import { LessPluginRemoveAntdGlobalStyles } from 'less-plugin-remove-antd-global-styles'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        additionalData: '@root-entry-name: default;',
        plugins: [new LessPluginRemoveAntdGlobalStyles()],
      },
    },
  },
});
