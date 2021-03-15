/*
 * @Description: 导航数据
 * @LastEditors: zhangbowen
 * @LastEditTime: 2021-03-15 11:03:59
 */
import { INavItem } from "@/components/navBar/index.d";
const navItemsCN: INavItem[] = [
  { text: "主页", name: "home", icon: "mdi-home", to: "/" },
  {
    text: "随机博彩",
    name: "lottery",
    icon: "mdi-numeric-8-circle-outline",
    to: "/lottery"
  },
  {
    text: "计算每月地铁花销",
    name: "subway",
    icon: "mdi-cash-multiple",
    to: "/subway"
  },
  { text: "设置", name: "setting", icon: "mdi-cog", to: "/setting" },
  { text: "待定", name: "todo", icon: "mdi-flag", to: "/todo" }
];
const navItemsUS: INavItem[] = [
  { text: "Home", name: "home", icon: "mdi-home", to: "/" },
  {
    text: "Random betting",
    name: "lottery",
    icon: "mdi-numeric-8-circle-outline",
    to: "/lottery"
  },
  {
    text: "Calculate monthly subway expenses",
    name: "subway",
    icon: "mdi-cash-multiple",
    to: "/subway"
  },
  { text: "Setting", name: "setting", icon: "mdi-cog", to: "/setting" },
  {
    text: "To be determined",
    name: "todo",
    icon: "mdi-flag",
    to: "/todo"
  }
];
export default {
  navItemsUS,
  navItemsCN
};
export { navItemsUS, navItemsCN };
