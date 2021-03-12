<template>
  <v-bottom-navigation
    v-model="value"
    :background-color="color"
    app
    dark
    shift
    :input-value="$vuetify.breakpoint.width<=960"
  >
    <v-btn>
      <span>Video{{ height }}</span>

      <v-icon>mdi-television-play</v-icon>
    </v-btn>

    <v-btn>
      <span>Music</span>

      <v-icon>mdi-music-note</v-icon>
    </v-btn>

    <v-btn>
      <span>Book</span>

      <v-icon>mdi-book</v-icon>
    </v-btn>

    <v-btn>
      <span>Image</span>

      <v-icon>mdi-image</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {}
})
export default class BottomNav extends Vue {
  value = 1;
  get color() {
    switch (this.value) {
      case 0:
        return "blue-grey";
      case 1:
        return "teal";
      case 2:
        return "brown";
      case 3:
        return "indigo";
      default:
        return "blue-grey";
    }
  }
  get height() {
    console.log("this.$vuetify.breakpoint.name", this.$vuetify.breakpoint,this.$vuetify.breakpoint.width,this.$vuetify.breakpoint.mobile,this.$vuetify.breakpoint.name);
    switch (this.$vuetify.breakpoint.name) {
      case "xs":
        return 220;
      case "sm":
        return 400;
      case "md":
        return 500;
      case "lg":
        return 600;
      case "xl":
        return 800;
    }
    return 800;
  }
}
</script>
<style lang="scss" scoped>
.v-item-group.v-bottom-navigation .v-btn {
  height: inherit;
}
// .v-item-group.v-bottom-navigation--shift .v-btn .v-btn__content > *:not(.v-icon) {
//   top: calc(100% - 12px);
// }
// .v-item-group.v-bottom-navigation{
//   align-items: center;
// }
</style>
