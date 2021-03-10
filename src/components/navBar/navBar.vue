<template>
  <v-card class="mx-auto"  height="100%">
    <v-list shaped>
      <v-subheader>菜单</v-subheader>
      <v-list-item-group v-model="selectedItem" color="primary">
        <v-list-item v-for="(item, i) in navItems" :key="i" :to="item.to">
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
import { Component, Vue, Prop } from "vue-property-decorator";
import { INavItem } from "./index.d";

@Component({
  components: {}
})
export default class NavBar extends Vue {
  @Prop({ type: Array, default: () => [] }) readonly navItems?: INavItem[];

  private selectedItem = 1;
}
</script>
