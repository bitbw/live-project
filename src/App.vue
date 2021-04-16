<template>
  <v-app id="inspire" class="overflow-hidden">
    <!-- <v-system-bar  app dark>
      <v-icon>mdi-message</v-icon>
      <span>10 unread messages</span>
      <v-spacer></v-spacer>
      <v-icon>mdi-minus</v-icon>
      <v-icon>mdi-checkbox-blank-outline</v-icon>
      <v-icon>mdi-close</v-icon>
    </v-system-bar> -->
    
    <!-- 侧边导航 可以放置在应用的左边或右边，并且可以配置在 v-app-bar 的旁边或下面 -->
    <v-navigation-drawer
      app
      v-model="drawerFlag"
      bottom
      hide-overlay
      disable-resize-watcher
      mobile-breakpoint="960"
    >
      <NavBar :navItemsUS="navItemsUS" :navItemsCN="navItemsCN" />
    </v-navigation-drawer>
      <!-- elevate-on-scroll -->
    <!-- 头部 总是放在应用顶部，优先级低于 v-system-bar  -->
    <v-app-bar
      app
      absolute
      color="teal lighten-3"
      dark
      hide-on-scroll
      scroll-target="#scrolling-techniques-7"
    >
      <v-app-bar-nav-icon
        @click="drawerFlag = !drawerFlag"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- 主视图 当使用 vue-router 时，建议将你的视图放在 v-main 内。 -->
    <v-main   id="scrolling-techniques-7" >
      <v-container fluid>
      <router-view />
      </v-container>
    </v-main>

    <!-- 底部导航 总是放在应用底部，优先级高于 v-footer -->
    <BottomNav
  
      :navItemsUS="navItemsUS"
      :navItemsCN="navItemsCN"
      v-if="$vuetify.breakpoint.width <= 960"
    />
    <!-- footer 总是放在应用底部，优先级低于 v-bottom-navigation -->
    <!-- <v-footer app>
      footer
    </v-footer> -->
  </v-app>
</template>

<script lang="ts">
import NavBar from "@/components/navBar";
import BottomNav from "@/components/bottomNav";
import { Component, Vue, Watch } from "vue-property-decorator";
import { navItemsUS, navItemsCN } from "@/libs/navData";
import { INavItem } from "@/components/navBar/index.d";
@Component({
  components: {
    NavBar,
    BottomNav
  }
})
export default class App extends Vue {
  private drawerFlag = false;
  private navItemsUS: INavItem[] = navItemsUS;
  private navItemsCN: INavItem[] = navItemsCN;
  // 当屏幕尺寸 大于960 显示侧边栏导航
  @Watch("$vuetify.breakpoint.width", { immediate: true })
  handleWatchWidth(val: number) {
    if (val > 960) {
      this.drawerFlag = true;
    }
  }
  mounted() {
    (window as any).app = this;
  }
}
</script>
<style lang="scss" scoped>
.v-application {
  // overflow: hidden;
}
main.v-main{
  height: 100vh;
    overflow-y: auto;
}
</style>
