<template>
  <v-card color="blue-grey darken-1" dark :loading="isUpdating" height="100%">
    <template v-slot:progress>
      <v-progress-linear
        absolute
        color="green lighten-3"
        height="4"
        indeterminate
      ></v-progress-linear>
    </template>
    <v-img height="300" src="https://picsum.photos/500/300">
      <v-row>
        <v-col class="text-right" cols="12">
          <v-menu bottom left transition="slide-y-transition">
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on">
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>
            <v-list>
              <!--  @click="isUpdating = true" -->
              <v-list-item>
                <v-list-item-action>
                  <v-icon>mdi-cog</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>Update</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-col>
        <v-row class="pa-4" align="center" justify="center">
          <v-col class="text-center">
            <h3 class="headline">
              {{ name }}
            </h3>
            <span class="grey--text text--lighten-1">{{ title }}</span>
          </v-col>
        </v-row>
      </v-row>
    </v-img>
    <v-form>
      <v-container>
        <!-- 双色 -->
        <template v-for="(dataGroup, gIndex) in dataGroups">
          <v-row :key="gIndex + dataGroup.name">
            <v-col cols="12">
              <h3 class="headline">
                {{ dataGroup.name }}
              </h3>

              <v-divider></v-divider>
            </v-col>
            <v-col cols="12">
              <v-btn
                :disabled="autoUpdate"
                rounded
                color="primary"
                dark
                @click="handleRandom(dataGroup)"
              >
                随机
              </v-btn>
            </v-col>
            <v-col cols="12" md="8">
              <v-autocomplete
                v-model="dataGroup.beforeSelected"
                :disabled="isUpdating"
                :items="dataGroup.beforeRaw"
                filled
                chips
                color="blue-grey lighten-2"
                label="Select"
                item-text="name"
                item-value="id"
                multiple
              >
                <template v-slot:selection="data">
                  <v-chip
                    color="red"
                    v-bind="data.attrs"
                    :input-value="data.selected"
                    close
                    @click="data.select"
                    @click:close="remove(dataGroup.beforeRaw, data.item)"
                  >
                    <!-- <v-avatar left>
                    <v-img :src="data.item.avatar"></v-img>
                  </v-avatar> -->
                    {{ data.item.name }}
                  </v-chip>
                </template>
                <template v-slot:item="data">
                  <template>
                    <v-list-item-content
                      v-text="data.item.name"
                    ></v-list-item-content>
                  </template>
                </template>
              </v-autocomplete>
            </v-col>

            <v-col cols="12" md="4">
              <v-autocomplete
                v-model="dataGroup.afterSelected"
                :disabled="isUpdating"
                :items="dataGroup.afterRaw"
                filled
                chips
                color="blue-grey lighten-2"
                label="Select"
                item-text="name"
                item-value="id"
                multiple
              >
                <template v-slot:selection="data">
                  <v-chip
                    color="primary"
                    v-bind="data.attrs"
                    :input-value="data.selected"
                    close
                    @click="data.select"
                    @click:close="remove(dataGroup.afterRaw, data.item)"
                  >
                    {{ data.item.name }}
                  </v-chip>
                </template>
                <template v-slot:item="data">
                  <template>
                    <v-list-item-content
                      v-text="data.item.name"
                    ></v-list-item-content>
                  </template>
                </template>
              </v-autocomplete>
            </v-col>
          </v-row>
        </template>
      </v-container>
    </v-form>
    <v-divider></v-divider>
    <v-card-actions>
      <v-switch
        v-model="autoUpdate"
        class="mt-0"
        color="green lighten-2"
        hide-details
        label="Auto Update"
      ></v-switch>
      <v-spacer></v-spacer>
      <v-btn
        :disabled="autoUpdate"
        color="blue-grey darken-3"
        depressed
        @click="handleUpdate"
      >
        <v-icon left>
          mdi-update
        </v-icon>
        Update Now
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class VueComponent extends Vue {
  public refs!: { [x: string]: any };
  // 双色
  twoToneData: any = {
    name: "twoTone",
    beforeRaw: [],
    afterRaw: [],
    beforeSelected: [],
    afterSelected: []
  };
  // 超级大
  superBigData: any = {
    name: "superBig",
    beforeRaw: [],
    afterRaw: [],
    beforeSelected: [],
    afterSelected: []
  };
  // 集合
  dataGroups = [this.twoToneData, this.superBigData];
  autoUpdate = false;
  isUpdating = false;
  name = "Midnight Crew";
  title = "The summer breeze";
  mounted() {
    this.dataGroups[0].beforeRaw = this.getArray(1, 33);
    this.dataGroups[0].afterRaw = this.getArray(1, 16);
    this.dataGroups[1].beforeRaw = this.getArray(1, 35);
    this.dataGroups[1].afterRaw = this.getArray(1, 12);
  }
  getArray(before = 1, after = 35) {
    const temp = [];
    for (let i = before; i <= after; i++) {
      const obj = { name: i.toString(), id: i };
      temp.push(obj);
    }
    return temp;
  }
  handleRandom(dataGroup: any) {
    const { name, beforeRaw, afterRaw } = dataGroup;
    // let { beforeSelected, afterSelected } = dataGroup;
    if (name === "twoTone") {
      dataGroup.beforeSelected = this.getRandomArray(6, beforeRaw);
      dataGroup.afterSelected = this.getRandomArray(1, afterRaw);
    } else {
      dataGroup.beforeSelected = this.getRandomArray(5, beforeRaw);
      dataGroup.afterSelected = this.getRandomArray(2, afterRaw);
    }
  }
  getRandomArray(beforeNum: number, rawArray: any[]) {
    const tempArray: any[] = JSON.parse(JSON.stringify(rawArray));
    const tempSelected: any[] = [];
    for (let i = 1; i <= beforeNum; i++) {
      const randomIndex = Math.floor(Math.random() * tempArray.length);
      tempSelected.push(tempArray[randomIndex]);
      tempArray.splice(randomIndex, 1);
    }
    return tempSelected;
  }
  handleUpdate() {
    for (const Group of this.dataGroups) {
      this.handleRandom(Group);
    }
  }

  remove(selected: any[], item: any) {
    const index = selected.indexOf(item.id);
    if (index >= 0) selected.splice(index, 1);
  }
}
</script>

<style lang="scss" scoped></style>
