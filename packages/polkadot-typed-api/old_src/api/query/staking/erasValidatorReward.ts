import { ApiPromise } from "@polkadot/api";

export async function erasValidatorReward(
  apiPromise: ApiPromise,
  era: number
): Promise<number | null> {
  if (era < 0) {
    throw new Error(`Provided Era: ${era} is less than zero`);
  }

  const points = await apiPromise.query.staking.erasValidatorReward(era);
  return points.toJSON() as unknown as number | null;
}
