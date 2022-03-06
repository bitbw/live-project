export interface ILotteryDate {
  showName: any | string;
  name: string;
  beforeOption: {
    label: any | string;
  };
  afterOption: {
    label: any | string;
  };
  beforeRaw: Iitem[];
  afterRaw: Iitem[];
  beforeSelected: Iitem[];
  afterSelected: Iitem[];
}
export interface Iitem {
  name: string;
  id: number;
}
