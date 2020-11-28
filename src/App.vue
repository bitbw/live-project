<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <NavBar :navItems="navItems" />
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import NavBar from "@/components/navBar";
import { Component, Vue } from "vue-property-decorator";
import { INavItem } from "@/components/navBar/index.d";
@Component({
  components: {
    NavBar
  }
})
export default class App extends Vue {
  private drawer = false;
  private navItems: INavItem[] = [
    { text: "主页", icon: "mdi-home", to: "/" },
    { text: "随机博彩", icon: "mdi-numeric-8-circle-outline", to: "/lottery" },
    { text: "设置", icon: "mdi-numeric-8-circle-outline", to: "/setting" },
    { text: "待定", icon: "mdi-flag", to: "/222" }
  ];
}
</script>
<style lang="scss" scoped>
.v-application {
  overflow: hidden;
}
</style>
