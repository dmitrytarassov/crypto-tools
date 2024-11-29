export type System_Events_Json = {
  phase:
    | "Initialization"
    | {
        ApplyExtrinsic: "0" | "1";
      };
  event: {
    method:
      | string
      | "UpdatedInactive"
      | "ExtrinsicSuccess"
      | "CandidateIncluded"
      | "CandidateBacked"
      | "Withdraw"
      | "BatchInterrupted"
      | "Deposit"
      | "TransactionFeePaid"
      | "Transfer"
      | "PaidOut"
      | "ItemFailed"
      | "BatchCompletedWithErrors";
    section:
      | string
      | "treasury"
      | "system"
      | "paraInclusion"
      | "balances"
      | "transactionPayment"
      | "nominationPools"
      | "voterList"
      | "staking"
      | "xcmPallet"
      | "utility";
    index: string;
    data:
      | [
          {
            weight: { refTime: number; proofSize: number };
            class: string; // 'Mandatory'
            paysFee: "Yes" | "No"; // No?? We saw Yes only. Why it's not a bool?
          }
        ]
      | [
          {
            descriptor: {
              paraId: number;
              relayParent: string;
              collator: string;
              persistedValidationDataHash: string;
              povHash: string;
              erasureRoot: string;
              signature: string;
              paraHead: string;
              validationCodeHash: string;
            };
            commitmentsHash: string;
          },
          string,
          number,
          number
        ]
      | [string, string]; // [ reactivated, deactivated ];
  };
}[];
