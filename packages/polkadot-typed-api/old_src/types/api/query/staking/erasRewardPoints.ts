export type Staking_Eras_Reward_Points_Json = {
  total: number;
  individual: {
    [validator: string]: number;
  };
};
