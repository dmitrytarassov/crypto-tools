import { BrokenNumberType } from "../../../common/BrokenNumberType";

export type System_Block_Weight_Json = {
  normal: {
    refTime: BrokenNumberType;
    proofSize: BrokenNumberType;
  };
  operational: {
    refTime: BrokenNumberType;
    proofSize: BrokenNumberType;
  };
  mandatory: {
    refTime: BrokenNumberType;
    proofSize: BrokenNumberType;
  };
};
