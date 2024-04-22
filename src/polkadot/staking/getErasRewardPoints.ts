import { ApiPromise } from "@polkadot/api";

type ErasRewardPointsResult = {
  total: number;
  individual: {
    [validator: string]: number;
  };
};
export async function getErasRewardPoints(apiPromise: ApiPromise, era: number) {
  if (era < 0) {
    throw new Error(`Provided Era: ${era} is less than zero`);
  }

  const points = await apiPromise.query.staking.erasRewardPoints(era);
  return points.toJSON() as unknown as ErasRewardPointsResult;
}
