<template>
  <v-card color="orange" dark :loading="isUpdating" height="100%">
    <template v-slot:progress>
      <v-progress-linear
        absolute
        color="green lighten-3"
        height="4"
        indeterminate
      ></v-progress-linear>
    </template>
    <v-img height="200" src="https://picsum.photos/500/300">
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
        <!-- 选区 -->
        <template v-for="(dataGroup, gIndex) in dataGroups">
          <v-row :key="gIndex + dataGroup.name">
            <v-col cols="12">
              <h3 class="headline">
                {{ dataGroup.showName }}
              </h3>

              <v-divider></v-divider>
            </v-col>
            <!-- 按钮 -->
            <v-col cols="12">
              <v-btn
                :disabled="autoUpdate"
                rounded
                color="deep-orange darken-1"
                dark
                @click="handleRandom(dataGroup)"
              >
                {{ randomBtn }}
              </v-btn>
            </v-col>
            <!-- 前区 -->
            <v-col cols="12" md="8">
              <v-autocomplete
                rounded
                v-model="dataGroup.beforeSelected"
                :disabled="autoUpdate"
                :items="dataGroup.beforeRaw"
                disable-lookup
                filled
                chips
                color="blue-grey lighten-2"
                :label="dataGroup.beforeOption.label"
                item-text="name"
                item-value="id"
                multiple
                hide-details
              >
                <template v-slot:selection="data">
                  <v-chip
                    color="red accent-2"
                    v-bind="data.attrs"
                    :input-value="data.selected"
                    @click="data.select"
                    @click:close="remove(dataGroup.beforeRaw, data.item)"
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
            <!-- 后区 -->
            <v-col cols="12" md="4">
              <v-autocomplete
                rounded
                v-model="dataGroup.afterSelected"
                :disabled="autoUpdate"
                :items="dataGroup.afterRaw"
                disable-lookup
                filled
                chips
                color="blue-grey lighten-2"
                :label="dataGroup.afterOption.label"
                item-text="name"
                item-value="id"
                multiple
                hide-details
              >
                <template v-slot:selection="data">
                  <v-chip
                    color="cyan lighten-1"
                    v-bind="data.attrs"
                    :input-value="data.selected"
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
        color="deep-orange darken-1"
        hide-details
        label="锁定号码"
      ></v-switch>
      <v-spacer></v-spacer>
      <v-btn
        :disabled="autoUpdate"
        color="deep-orange darken-1"
        rounded
        @click="handleUpdate"
      >
        <v-icon left>
          mdi-update
        </v-icon>
        重置
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { ILotteryDate, Iitem } from "./index.d";
@Component({})
export default class Lottery extends Vue {
  public refs!: { [x: string]: any };
  // 双色
  private twoToneData: ILotteryDate = {
    showName: this.$t("lottery.twoTone"),
    name: "twoTone",
    beforeOption: {
      label: this.$t("lottery.redball"),
    },
    afterOption: {
      label: this.$t("lottery.blueball"),
    },
    beforeRaw: [],
    afterRaw: [],
    beforeSelected: [],
    afterSelected: [],
  };
  // 超级
  private superBigData: ILotteryDate = {
    showName: this.$t("lottery.superBig"),
    name: "superBig",
    beforeOption: {
      label: this.$t("lottery.frontZone"),
    },
    afterOption: {
      label: this.$t("lottery.backZone"),
    },
    beforeRaw: [],
    afterRaw: [],
    beforeSelected: [],
    afterSelected: [],
  };
  // 集合
  private dataGroups: ILotteryDate[] = [this.twoToneData, this.superBigData];
  private autoUpdate = false;
  private isUpdating = false;
  private name = this.$t("lottery.title");
  private title = "Get your own lucky number";
  private randomBtn = this.$t("lottery.getLuckyNumbers");
  mounted() {
    // twoTone
    this.dataGroups[0].beforeRaw = this.getArray(1, 33);
    this.dataGroups[0].afterRaw = this.getArray(1, 16);
    //  superBig
    this.dataGroups[1].beforeRaw = this.getArray(1, 35);
    this.dataGroups[1].afterRaw = this.getArray(1, 12);
  }
  // 获取指定的数字集合
  getArray(before = 1, after = 35): Iitem[] {
    const temp: Iitem[] = [];
    for (let i = before; i <= after; i++) {
      const obj = { name: i.toString(), id: i };
      temp.push(obj);
    }
    return temp;
  }
  // 点击获取
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
  // 获取随机集合
  getRandomArray(beforeNum: number, rawArray: Iitem[]) {
    const tempArray: Iitem[] = JSON.parse(JSON.stringify(rawArray));
    const tempSelected: Iitem[] = [];
    for (let i = 1; i <= beforeNum; i++) {
      const randomIndex = Math.floor(Math.random() * tempArray.length);
      tempSelected.push(tempArray[randomIndex]);
      tempArray.splice(randomIndex, 1);
    }
    tempSelected.sort((a, b) => a.id - b.id);
    return tempSelected;
  }
  handleUpdate() {
    for (const Group of this.dataGroups) {
      this.handleRandom(Group);
    }
  }
  remove(selected: Iitem[], item: Iitem) {
    const index = selected.findIndex(i => i.id === item.id);
    if (index >= 0) selected.splice(index, 1);
  }
}
</script>

<style lang="scss" scoped>
::v-deep {
  .v-select__selections {
    padding-top: 30px !important;
    padding-bottom: 10px;
  }
}
</style>
