/*
 * @Description: 导航数据
 * @LastEditors: zhangbowen
 * @LastEditTime: 2021-03-11 10:35:15
 */
import { INavItem } from "@/components/navBar/index.d";
const navItemsCN: INavItem[] = [
  { text: "主页", icon: "mdi-home", to: "/" },
  { text: "随机博彩", icon: "mdi-numeric-8-circle-outline", to: "/lottery" },
  { text: "计算每月地铁花销", icon: "mdi-cash-multiple", to: "/subway" },
  { text: "设置", icon: "mdi-cog", to: "/setting" },
  { text: "待定", icon: "mdi-flag", to: "/222" }
];
const navItemsUS: INavItem[] = [
  { text: "Home", icon: "mdi-home", to: "/" },
  {
    text: "Random betting",
    icon: "mdi-numeric-8-circle-outline",
    to: "/lottery"
  },
  {
    text: "Calculate monthly subway expenses",
    icon: "mdi-cash-multiple",
    to: "/subway"
  },
  { text: "Setting", icon: "mdi-cog", to: "/setting" },
  { text: "To be determined", icon: "mdi-flag", to: "/222" }
];
export default {
  navItemsUS,
  navItemsCN
};
export { navItemsUS, navItemsCN };
