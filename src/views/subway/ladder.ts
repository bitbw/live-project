import ILadder from "./ladder.d";
export class Ladder {
  frequency = 0; // 当前阶段次数
  money = 0; // 当前阶段钱数
  upperLimit: number | string = 0; // 当前阶上限   数字或者 *， * 表示往上所有数字
  lowerLimit: number | string = 0; // 当前阶下限
  discont = 0; // 当前阶折扣  百分比

  constructor(option?: ILadder) {
    for (const key in option) {
      if (Object.prototype.hasOwnProperty.call(option, key)) {
        (this as any)[key] = option[key];
      }
    }
  }

  /**
   * @description:
   * @param { number } starMoney  当前阶段前面所有money的汇总
   * @param { number } starFrequency  当前阶段前面所有次数的汇总
   * @param { number } moneySpentEachTime  每次money
   * @param { number } totalFrequency  总次数
   * @return { object }  返回加上本阶段的汇总数据
   */
  calc(option: any) {
    const {
      starMoney,
      starFrequency,
      moneySpentEachTime,
      totalFrequency
    } = option;
    // 上限正常是数字的情况
    if (typeof this.upperLimit === "number") {
      // 当前阶段的次数 = 上限 - 当前阶段前面所有money的汇总 as 当前阶段的价格区间，/ 每次money * 折扣 as 当前区间每次money
      this.frequency = Math.ceil(
        (this.upperLimit - starMoney) /
          (moneySpentEachTime * (this.discont / 100))
      );
      // 上限是 * 的情况
    } else {
      // 最后阶段的次数 = 总次数 - 当前阶段前面所有次数的汇总
      this.frequency = totalFrequency - starFrequency;
    }
    this.money = this.frequency * moneySpentEachTime * (this.discont / 100);
    // 返回加上本阶段的汇总数据
    return {
      currentTotalMoney: this.money + starMoney,
      currentTotalFrequency: this.frequency + starFrequency
    };
  }
}

export default Ladder;

// 默认阶梯值
export const defaultLadders = () => [
  new Ladder({
    id: 1,
    name: "lodder1",
    lowerLimit: 0,
    upperLimit: 100,
    discont: 100
  }),
  new Ladder({
    id: 2,
    name: "lodder2",
    lowerLimit: 100,
    upperLimit: 150,
    discont: 80
  }),
  new Ladder({
    id: 3,
    name: "lodder3",
    lowerLimit: 150,
    upperLimit: "*",
    discont: 50
  })
];
