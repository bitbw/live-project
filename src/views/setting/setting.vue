<template>
  <v-card flat class="setting-container">
    <v-row>
      <v-col cols="12" md="6">
        <v-switch
          v-model="$vuetify.theme.dark"
          hint="This toggles the global state of the Vuetify theme"
          inset
          :label="$t('toggles') + ' ' + $t('setting.theme')"
          persistent-hint
        ></v-switch>
      </v-col>
      <v-col cols="12" md="6">
        <v-select
          :items="languageList"
          :label="$t('toggles') + ' ' + $t('setting.language')"
          v-model="$i18n.locale"
        ></v-select>
      </v-col>
    </v-row>
    <!-- <v-toolbar flat height="72"></v-toolbar>
    <v-toolbar flat height="72"></v-toolbar> -->
    <!-- test -->
    <!-- <v-card-text>
      <v-list>
        <v-subheader>I inherit dark from my parent</v-subheader>

        <v-list-item v-for="item in items" :key="item">
          <v-list-item-title v-text="item"></v-list-item-title>
        </v-list-item>
      </v-list>

      <v-divider class="mb-y"></v-divider>

      <v-theme-provider root>
        <v-list>
          <v-subheader>
            <span>I inherit from the root</span>

            <strong>&nbsp;$vuetify.theme.dark</strong>
          </v-subheader>

          <v-list-item v-for="item in items" :key="item">
            <v-list-item-title v-text="item"></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-theme-provider>
    </v-card-text> -->
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component({})
export default class Setting extends Vue {
  @Prop({ type: Object, default: () => ({}) }) readonly attrs: any;
  public refs!: { [x: string]: any };
  // private items = ["One", "Two", "Three"];
  // 语言选项列表
  get languageList() {
    return Object.keys(this.$i18n.messages);
  }
}
</script>

<style lang="scss" scoped>
.setting-container {
  height: 100%;
}
</style>
