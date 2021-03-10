import ILadder from "./ladder.d";
export class Ladder {
  frequency = 0; // 次数
  money = 0; // 钱数
  upperLimit: number | string = 0; // 上限
  lowerLimit: number | string = 0; // 下限
  discont = 0; // 折扣
  constructor(option?: ILadder) {
    for (const key in option) {
      if (Object.prototype.hasOwnProperty.call(option, key)) {
        (this as any)[key] = option[key];
      }
    }
  }
  calc(
    starMoney: number,
    starFrequency: number,
    moneySpentEachTime: number,
    totalFrequency: number
  ) {
      debugger;
    if (typeof this.upperLimit === "number") {
      this.frequency = Math.ceil(
        (this.upperLimit - starMoney) /
          (moneySpentEachTime * (this.discont / 100))
      );
    } else {
      this.frequency = totalFrequency - starFrequency;
    }
    console.log("Bowen: Ladder -> calc -> this", this);
    this.money = moneySpentEachTime * this.frequency * (this.discont / 100);
    return {
      currentTotalMoney: this.money + starMoney,
      currentTotalFrequency: this.frequency + starFrequency
    };
  }
}
export default Ladder;

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
