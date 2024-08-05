import { ApiPromise } from "@polkadot/api";

import { BrokenNumberType } from "../types/BrokenNumberType";

export type Nomination_Pools_Bonded_Pools_Json = {
  commission: {
    current: [number, string] | null;
    max: number | null;
    changeRate: { maxIncrease: number; minDelay: number } | null;
    throttleFrom: number | null;
    claimPermission: null; // always null
  };
  memberCounter: number;
  points: BrokenNumberType;
  roles: {
    depositor: string;
    root: string;
    nominator: string;
    bouncer: string;
  };
  state: "Open" | "Destroying" | "Blocked";
};

export async function bondedPools(
  apiPromise: ApiPromise,
  poolId: number
): Promise<Nomination_Pools_Bonded_Pools_Json | null> {
  const data = await apiPromise.query.nominationPools.bondedPools(poolId);

  return data.toJSON() as any as Nomination_Pools_Bonded_Pools_Json | null;
}

export type Nomination_Pools_Bonded_Pools_Entries = [
  number,
  Nomination_Pools_Bonded_Pools_Json
][];

bondedPools.entries = async function (
  apiPromise: ApiPromise
): Promise<Nomination_Pools_Bonded_Pools_Entries> {
  const data = await apiPromise.query.nominationPools.bondedPools.entries();

  const result: Nomination_Pools_Bonded_Pools_Entries = [];

  data.forEach(([poolId, data]) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    result.push([+poolId.toHuman()[0], data.toHuman()]);
  });

  return result;
};
