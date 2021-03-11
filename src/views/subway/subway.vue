<template>
  <v-container fluid>
    <!-- calculate -->
    <v-card flat class="calculate-container">
      <v-toolbar dense elevation="0">
        <v-icon left size="30">mdi-alarm-panel-outline</v-icon>
        <v-toolbar-title>{{ $t("calculate") }}</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-card-text>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              :label="$t('subway.moneySpentEachTime')"
              type="number"
              v-model.number="moneySpentEachTime"
              suffix="￥"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              :label="$t('subway.totalFrequency')"
              type="number"
              v-model.number="totalFrequency"
              suffix="Frequency"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-btn color="secondary" dark @click="handleCalc">
              {{ $t("calculate") }}
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="1">
            <v-toolbar-title>{{ $t("result") }}</v-toolbar-title>
          </v-col>
          <v-col cols="12" md="8">
            <v-text-field
              disabled
              :value="resultMoney"
              suffix="￥"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <!-- ladder -->
    <v-card flat class="ladder-container">
      <v-toolbar dense elevation="0">
        <v-icon left size="30">mdi-animation</v-icon>
        <v-toolbar-title>{{ $t("subway.ladder") }}</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-card-text>
        <v-row align="center">
          <v-col cols="12" class="pa-0">
            <v-row
              align="center"
              v-for="(ladder, index) in ladders"
              :key="`${ladder.name}-${ladder.id}`"
              class="ma-0"
            >
              <v-col cols="12" md="2">
                <v-text-field
                  :label="$t('name')"
                  v-model="ladder.name"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="2">
                <v-text-field
                  :label="$t('subway.lowerLimit')"
                  v-model="ladder.lowerLimit"
                  suffix="￥"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="2">
                <v-text-field
                  :label="$t('subway.upperLimit')"
                  v-model="ladder.upperLimit"
                  suffix="￥"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="2">
                <v-text-field
                  :label="$t('subway.discont')"
                  v-model="ladder.discont"
                  suffix="%"
                ></v-text-field>
              </v-col>
              <!-- 删除按钮 -->
              <v-col cols="12" md="2">
                <v-btn icon @click="handleRemoveladder(index)">
                  <v-icon>mdi-trash-can</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
          <!-- 新增按钮 -->
          <v-col cols="12">
            <v-btn tile @click="handleAddladder()">
              <v-icon left>mdi-plus</v-icon>
              <span>{{ $t("add") }}</span>
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Ladder, { defaultLadders } from "./ladder";
import ILadder from "./ladder.d";
@Component({})
export default class Subway extends Vue {
  public refs!: { [x: string]: any };
  // 每次花销
  private moneySpentEachTime = 0;
  // 次数
  private totalFrequency = 0;
  // 阶梯编辑模板
  private editLadder: ILadder = {
    upperLimit: 0,
    lowerLimit: 0,
    discont: 0,
    name: "",
    id: 0
  };
  // 阶梯  阶梯1  0-100  阶梯次数  100-150 阶梯3  150-infinity
  private ladders: Ladder[] = [];
  // 结果
  private resultMoney = 0;
  // 处理计算
  private handleCalc() {
    if (!this.moneySpentEachTime || !this.totalFrequency) {
      return;
    }
    const firstLadder = this.ladders[0];
    const starDate = {
      currentTotalMoney: firstLadder.lowerLimit, // 当前阶段前面所有money的汇总
      currentTotalFrequency: 0 // 当前阶段前面所有次数的汇总
    };
    // use reduce
    const { currentTotalMoney } = this.ladders.reduce(
      (total: any, ladder) => {
        const option = {
          starMoney: total.currentTotalMoney,
          starFrequency: total.currentTotalFrequency,
          moneySpentEachTime: this.moneySpentEachTime,
          totalFrequency: this.totalFrequency
        };
        return ladder.calc(option);
      },
      starDate
    );
    this.resultMoney = currentTotalMoney;
  }
  // add
  private handleAddladder() {
    let lowerLimit = Number(this.ladders[this.ladders.length - 1].upperLimit);
    lowerLimit = isNaN(lowerLimit) ? 0 : lowerLimit;
    this.ladders.push(
      new Ladder({
        ...this.editLadder,
        lowerLimit,
        upperLimit: "*",
        id: this.ladders.length + 1,
        name: `ladder${this.ladders.length + 1}`
      })
    );
  }
  // remove
  private handleRemoveladder(index: number) {
    this.ladders.splice(index, 1);
  }
  created() {
    this.ladders = defaultLadders();
    (window as any).sub = this;
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
