/*
 * @Description: 导航数据
 * @LastEditors: Bowen
 * @LastEditTime: 2021-11-05 11:30:26
 */
import { INavItem } from "@/components/navBar/index.d";
const navItemsCN: INavItem[] = [
  { text: "主页", name: "home", icon: "mdi-home", to: "/" },
  {
    text: "随机博彩",
    name: "lottery",
    icon: "mdi-numeric-8-circle-outline",
    to: "/lottery",
  },
  {
    text: "计算每月地铁花销",
    name: "subway",
    icon: "mdi-cash-multiple",
    to: "/subway",
  },
  {
    text: "当前时间",
    name: "time",
    icon: "mdi-clock-outline",
    to: "/time",
  },
  { text: "设置", name: "setting", icon: "mdi-cog", to: "/setting" },
  { text: "待定", name: "todo", icon: "mdi-flag", to: "/todo" },
  {
    text: "测试",
    name: "test",
    icon: "mdi-flag",
    to: "/test",
  },
];
const navItemsUS: INavItem[] = [
  { text: "Home", name: "home", icon: "mdi-home", to: "/" },
  {
    text: "Random betting",
    name: "lottery",
    icon: "mdi-numeric-8-circle-outline",
    to: "/lottery",
  },
  {
    text: "Calculate monthly subway expenses",
    name: "subway",
    icon: "mdi-cash-multiple",
    to: "/subway",
  },
  {
    text: "Current Time",
    name: "time",
    icon: "mdi-clock-outline",
    to: "/time",
  },
  { text: "Setting", name: "setting", icon: "mdi-cog", to: "/setting" },
  {
    text: "To be determined",
    name: "todo",
    icon: "mdi-flag",
    to: "/todo",
  },
  {
    text: "To be determined",
    name: "test",
    icon: "mdi-flag",
    to: "/test",
  },
];
export default {
  navItemsUS,
  navItemsCN,
};
export { navItemsUS, navItemsCN };
