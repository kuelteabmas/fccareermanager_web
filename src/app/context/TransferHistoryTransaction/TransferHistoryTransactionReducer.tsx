import { TransferHistoryTransactionStateType, TransferHistoryTransactionActionType } from "./TransferHistoryTransactionState";

export const transferHistoryTransactionReducer = (
  state: TransferHistoryTransactionStateType,
  action: TransferHistoryTransactionActionType
): TransferHistoryTransactionStateType => {
  const actionType = action.type

  switch (action.type) {
    case "SET_DEALTYPE":
      return { dealType: action.payload };
    case "SHOW_LOANTYPE_DROPDOWN":
      return { ...state, isLoanTypeHidden: action.payload  };      
    default:
      throw new Error(`Unhandled action type: ${actionType}`);
  }
};
