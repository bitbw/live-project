<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      disable-resize-watcher
      bottom
      mobile-breakpoint="960"
      app
    >
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
import { navItems } from "@/libs/navData";
import { INavItem } from "@/components/navBar/index.d";
@Component({
  components: {
    NavBar
  }
})
export default class App extends Vue {
  private drawer = true;
  private navItems: INavItem[] = navItems;
}
</script>
<style lang="scss" scoped>
.v-application {
  overflow: hidden;
}
</style>
