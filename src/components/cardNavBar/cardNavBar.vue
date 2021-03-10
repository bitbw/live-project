<template>
  <v-container class="pa-4 text-center">
    <v-row class="fill-height" align="center" justify="center">
      <template v-for="(item, i) in items">
        <v-col :key="i" cols="12" md="4">
          <v-hover v-slot="{ hover }">
            <v-card :elevation="hover ? 12 : 2" :class="{ 'on-hover': hover }" v-ripple>
              <v-img :src="item.img" height="225px">
                <v-card-title class="title white--text">
                  <v-row
                    class="fill-height flex-column"
                    justify="space-between"
                  >
                    <p class="mt-4 subheading text-left">
                      {{ item.title }}
                    </p>

                    <div>
                      <p
                        class="ma-0 body-1 font-weight-bold font-italic text-left"
                      >
                        {{ item.text }}
                      </p>
                      <p
                        class="caption font-weight-medium font-italic text-left"
                      >
                        {{ item.subtext }}
                      </p>
                    </div>
                  </v-row>
                </v-card-title>
              </v-img>
            </v-card>
          </v-hover>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { INavItem } from "../navBar/index.d";

@Component({
  components: {}
})
export default class NavBar extends Vue {
  @Prop({ type: Array, default: () => [] }) readonly navItems?: INavItem[];

  private selectedItem = 1;
  private items = [
    {
      title: "New Releases",
      text: `It's New Release Friday`,
      subtext: "Newly released songs. Updated daily.",
      img: "https://cdn.vuetifyjs.com/images/cards/house.jpg"
    },
    {
      title: "Rock",
      text: "Greatest Rock Hits",
      subtext: "Lose yourself in rock tunes.",
      img:
        "https://cdn.vuetifyjs.com/images/cards/road.jpg"
    },
    {
      title: "Mellow Moods",
      text: "Ambient Bass",
      subtext: "Chill beats to mellow you out.",
      img: "https://cdn.vuetifyjs.com/images/cards/plane.jpg"
    }
  ];
}
</script>
<style scoped>
.v-card {
  transition: opacity 0.4s ease-in-out;
  background-color: black;
}

/* .v-card:not(.on-hover) {
  opacity: 0.6;
} */
</style>
