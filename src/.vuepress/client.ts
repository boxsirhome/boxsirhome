import { defineClientConfig } from "@vuepress/client";
import { setupRunningTimeFooter } from "vuepress-theme-hope/presets/footerRunningTime.js";
import "vuepress-theme-hope/presets/bounce-icon.scss";
import Layout from "./components/layout/Layout.vue";
export default defineClientConfig({
  layouts: {
    Layout,
  },
/*   setup() {
    setupRunningTimeFooter(
      new Date("2023-09-01"),
      {
        "/": "已运行 :day 天 :hour 小时 :minute 分钟 :second 秒",
      },
      true,
    );
  }, */
});
