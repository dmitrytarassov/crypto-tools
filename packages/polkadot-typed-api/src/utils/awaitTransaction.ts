import { SubmittableExtrinsic } from "@polkadot/api/promise/types";
import { IKeyringPair } from "@polkadot/types/types";

export enum TransactionStatus {
  New,
  Success,
  Error,
  Broadcast,
  InBlock,
}

export const awaitTransactionConfig: {
  log: boolean;
  awaitTime: number;
} = {
  log: true,
  awaitTime: 2 * 60 * 1_000, // 2 minutes
};

export async function awaitTransaction(
  extrinsic: SubmittableExtrinsic,
  signer: IKeyringPair,
  onStatusChange?: (
    status: TransactionStatus,
    hash?: string
  ) => void | Promise<void>,
  options?: {
    log?: boolean;
    awaitTime?: number;
  }
): Promise<string | null> {
  const log =
    typeof options?.log !== "undefined"
      ? options.log
      : awaitTransactionConfig.log;

  const awaitTime =
    typeof options?.awaitTime !== "undefined"
      ? options.awaitTime
      : awaitTransactionConfig.awaitTime;

  let hash: string;
  let isDone = false;
  let interval: number;

  function done() {
    isDone = true;

    if (interval) {
      clearInterval(interval);
    }
  }

  const _onStatusChange = onStatusChange
    ? onStatusChange
    : () => {
        // do nothing
      };

  return new Promise((resolve, reject) => {
    log && console.log("Submitting");

    if (awaitTime && awaitTime > 0) {
      interval = setTimeout(() => {
        done();

        reject(new Error("Rejected by timeout"));
      }, awaitTime) as unknown as number;
    }

    extrinsic.signAndSend(signer, (result) => {
      if (isDone) {
        return;
      }

      log && console.log("Status", result.status.type);

      if (result.status.isReady) {
        hash = result.txHash.toHuman() as string;
        _onStatusChange(TransactionStatus.New, hash);
      }
      if (hash && result.status.isBroadcast) {
        _onStatusChange(TransactionStatus.Broadcast, hash);
      }
      if (hash && result.status.isInBlock) {
        _onStatusChange(TransactionStatus.InBlock, hash);
      }
      if (result.status.isFinalized || result.status.isRetracted) {
        _onStatusChange(TransactionStatus.Success, hash);

        done();

        resolve(hash);
      } else if (
        result.status.isInvalid ||
        result.status.isRetracted ||
        result.status.isDropped
      ) {
        _onStatusChange(TransactionStatus.Error, hash);

        done();

        reject(
          new Error(`Transaction rejection. Status type: ${result.status.type}`)
        );
      }
    });
  });
}
