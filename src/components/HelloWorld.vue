<template>
  <div class="home-container">
    <v-row class="text-center">
      <v-col cols="12">
        <div class="home-title">hello world</div>
      </v-col>
    </v-row>
    <!-- <v-img
      :src="`https://picsum.photos/1600/900`"
      :lazy-src="`https://picsum.photos/16/9`"
      width="100%"
      height="100%"
      class="grey lighten-2"
    >
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular
            indeterminate
            color="grey lighten-5"
          ></v-progress-circular>
        </v-row>
      </template>
     
    </v-img> -->
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HelloWorld",

  data: () => ({
    ecosystem: [
      {
        text: "vuetify-loader",
        href: "https://github.com/vuetifyjs/vuetify-loader"
      },
      {
        text: "github",
        href: "https://github.com/vuetifyjs/vuetify"
      },
      {
        text: "awesome-vuetify",
        href: "https://github.com/vuetifyjs/awesome-vuetify"
      }
    ],
    importantLinks: [
      {
        text: "Documentation",
        href: "https://vuetifyjs.com"
      },
      {
        text: "Chat",
        href: "https://community.vuetifyjs.com"
      },
      {
        text: "Made with Vuetify",
        href: "https://madewithvuejs.com/vuetify"
      },
      {
        text: "Twitter",
        href: "https://twitter.com/vuetifyjs"
      },
      {
        text: "Articles",
        href: "https://medium.com/vuetify"
      }
    ],
    whatsNext: [
      {
        text: "Explore components",
        href: "https://vuetifyjs.com/components/api-explorer"
      },
      {
        text: "Select a layout",
        href: "https://vuetifyjs.com/getting-started/pre-made-layouts"
      },
      {
        text: "Frequently Asked Questions",
        href: "https://vuetifyjs.com/getting-started/frequently-asked-questions"
      }
    ]
  })
});
</script>
<style lang="scss" scoped>
.home-container {
  width: 100%;
  height: 100%;
  background-image: url("https://picsum.photos/1600/900");
  display: flex;
  justify-content: center;
  align-items: center;
  .home-title {
    font-size: 4.25rem;
    font-weight: 700;
    color: #fff;
  }
}
</style>
