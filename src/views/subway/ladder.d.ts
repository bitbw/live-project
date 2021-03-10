export default interface ILadder {
  frequency?: number;
  money?: number;
  upperLimit?: number | string;
  lowerLimit?: number;
  discont?: number;
  [x: string]: any; //任意类型
}
