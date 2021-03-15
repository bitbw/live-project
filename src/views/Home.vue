<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
    <CardNavBar :navItemsUS="navItemsUS" :navItemsCN="navItemsCN" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import CardNavBar from "@/components/cardNavBar"; // @ is an alias to /src
import { navItemsUS, navItemsCN } from "@/libs/navData";
import { INavItem } from "@/components/navBar/index.d";

@Component({
  components: {
    // HelloWorld,
    CardNavBar
  }
})
export default class Home extends Vue {
  private get navItemsUS(): INavItem[] {
    return navItemsUS.filter(i => i.name !== "home");
  }
  private get navItemsCN(): INavItem[] {
    return navItemsCN.filter(i => i.name !== "home");
  }
}
</script>
<style lang="scss" scoped>
.home {
  height: 100%;
}
</style>
