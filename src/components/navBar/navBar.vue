<template>
  <v-card class="mx-auto" width="300" height="100%">
    <v-list shaped>
      <v-subheader>菜单</v-subheader>
      <v-list-item-group v-model="selectedItem" color="primary">
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to">
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class NavBar extends Vue {
  items: any[] = [
    { text: "主页", icon: "mdi-home", to: "/" },
    { text: "随机博彩", icon: "mdi-numeric-8-circle-outline", to: "/lottery" },
    { text: "设置", icon: "mdi-numeric-8-circle-outline", to: "/setting" },
    { text: "待定", icon: "mdi-flag", to: "/222" }
  ];
  selectedItem = 1;
}
</script>
