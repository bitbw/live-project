/*
 * @Description: 导航数据
 * @LastEditors: zhangbowen
 * @LastEditTime: 2021-03-10 11:20:38
 */
import { INavItem } from "@/components/navBar/index.d";
const navItems: INavItem[] = [
  { text: "主页", icon: "mdi-home", to: "/" },
  { text: "随机博彩", icon: "mdi-numeric-8-circle-outline", to: "/lottery" },
  { text: "计算每月地铁花销", icon: "mdi-cash-multiple", to: "/subway" },
  { text: "设置", icon: "mdi-cog", to: "/setting" },
  { text: "设置", icon: "mdi-numeric-8-circle-outline", to: "/setting" },
  { text: "待定", icon: "mdi-flag", to: "/222" }
];
export default navItems;
export { navItems };
