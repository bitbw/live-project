<template>
  <!--   hide-on-scroll-->
  <v-bottom-navigation
    app
    v-model="value"
    dark
    grow
    shift
    :background-color="color"
  >
    <template v-for="(item, i) in navItems">
      <v-btn :key="i + item.name" :to="item.to" :text="true">
        <span>{{ item.name }}</span>
        <v-icon>{{ item.icon }}</v-icon>
      </v-btn>
    </template>
  </v-bottom-navigation>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { INavItem } from "../navBar/index.d";
@Component({
  components: {}
})
export default class BottomNav extends Vue {
  @Prop({ type: Array, default: () => [] }) readonly navItemsUS!: INavItem[];
  @Prop({ type: Array, default: () => [] }) readonly navItemsCN!: INavItem[];
  get navItems(): INavItem[] {
    this.navItemsCN;
    console.log(
      "Bowen ~ file: bottomNav.vue ~ line 24 ~ BottomNav ~ getnavItems ~  this.navItemsCN",
      this.navItemsCN
    );
    const navItems: INavItem[] =
      this.$i18n.locale === "en-US" ? this.navItemsUS : this.navItemsCN;
    return navItems.slice(0, 5);
  }
  value = 0;
  // mounted(){
  //   console.log("Bowen: BottomNav -> mounted -> this.$route.path", this.$route)
  //   console.log("Bowen: BottomNav -> mounted -> index", this.navItems.findIndex(i => i.to === this.$route.path))
  //   this.value = this.navItems.findIndex(i => i.to === this.$route.path);
  // }
  // value = this.navItems[0].name;
  get color() {
    switch (this.value) {
      case 0:
        return "blue-grey";
      case 1:
        return "teal";
      case 2:
        return "pink";
      case 3:
        return "purple darken-2";
      default:
        return "blue-grey lighten-2";
    }
  }
}
</script>
<style lang="scss" scoped>
// 处理底部导航的特殊情况
.v-item-group.v-bottom-navigation .v-btn {
  height: inherit;
}
</style>
