<template>
  <v-container fluid>
    <v-row>
      <v-col cols="4">
        <v-text-field
          label="Money Spent Each Time"
          type="number"
          v-model.number="moneySpentEachTime"
          suffix="￥"
        ></v-text-field>
      </v-col>
      <v-col cols="4">
        <v-text-field
          label="Frequency"
          type="number"
          v-model.number="totalFrequency"
          suffix="Frequency"
        ></v-text-field>
      </v-col>
      <v-col cols="4">
        <v-btn color="secondary" dark @click="handleCalc">
          calculate
        </v-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="1">
        <v-subheader>result</v-subheader>
      </v-col>
      <v-col cols="8">
        <v-text-field disabled :value="resultMoney" suffix="￥"></v-text-field>
      </v-col>
    </v-row>
    <v-card flat class="ladder-container">
      <v-toolbar dense elevation="0">
        <v-icon left size="30">mdi-animation</v-icon>
        <v-toolbar-title>ladder</v-toolbar-title>
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
              <v-col cols="2" md="2">
                <v-text-field label="name" v-model="ladder.name"></v-text-field>
              </v-col>
              <v-col cols="2" md="2">
                <v-text-field
                  label="lowerLimit"
                  v-model="ladder.lowerLimit"
                  suffix="￥"
                ></v-text-field>
              </v-col>
              <v-col cols="2" md="2">
                <v-text-field
                  label="upperLimit"
                  v-model="ladder.upperLimit"
                  suffix="￥"
                ></v-text-field>
              </v-col>
              <v-col cols="2" md="2">
                <v-text-field
                  label="discont"
                  v-model="ladder.discont"
                  suffix="%"
                ></v-text-field>
              </v-col>
              <!-- 删除按钮 -->
              <v-col cols="2" md="2">
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
              <span>add</span>
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
    const { currentTotalMoney, currentTotalFrequency } = this.ladders.reduce(
      (total: any, ladder, i) => {
        return ladder.calc(
          total.currentTotalMoney,
          total.currentTotalFrequency,
          this.moneySpentEachTime,
          this.totalFrequency
        );
      },
      {
        currentTotalMoney: firstLadder.lowerLimit,
        currentTotalFrequency: 0
      }
    );

    // const [ladder1, ladder2, ladder3] = this.ladders;
    // // 阶段1
    // ladder1.frequency = Math.ceil(100 / this.moneySpentEachTime);
    // ladder1.calc(this.moneySpentEachTime, 1);
    // // 阶段2
    // ladder2.frequency = this.handleLessThan0(
    //   Math.ceil((150 - ladder1.money) / (this.moneySpentEachTime * 0.8))
    // );
    // ladder2.calc(this.moneySpentEachTime, 0.8);
    // // 阶段3
    // ladder3.frequency = this.handleLessThan0(
    //   this.frequency - (ladder1.frequency + ladder2.frequency)
    // );
    // ladder3.calc(this.moneySpentEachTime, 0.5);
    // 汇总
    this.resultMoney = currentTotalMoney;
  }
  private handleAddladder() {
    let lowerLimit = Number(this.ladders[this.ladders.length - 1].upperLimit);
    lowerLimit = isNaN(lowerLimit) ? 666 : lowerLimit;
    this.ladders.push(
      new Ladder({
        ...this.editLadder,
        lowerLimit,
        id: this.ladders.length + 1,
        name: `ladder${this.ladders.length + 1}`
      })
    );
  }
  private handleRemoveladder(index: number) {
    this.ladders.splice(index, 1);
  }
  // 处理 小于0的 数字
  private handleLessThan0(num: number) {
    return num < 0 ? 0 : num;
  }
  created() {
    this.ladders = defaultLadders();
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
