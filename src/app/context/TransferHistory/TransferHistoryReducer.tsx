// import { TransferHistoryStateType, TransferHistoryActionType } from "./TransferHistoryState";

// export const transferHistoryReducer = (
    
//   state: TransferHistoryStateType,
//   action: TransferHistoryActionType
// ): TransferHistoryStateType => {
//   switch (action.type) {
//     case "GET_TRANSACTIONS":
//         return { ...state, transactions: action.payload};
//     case "ADD_TRANSACTION":
//       return { ...state, transactions: [...state.transactions, action.payload] };
//     case "SELECT_TRANSACTION":
//       return { ...state, selectedTransaction: action.payload };
//     case "CLEAR_FORM":
//       return { ...state, selectedTransaction: null };
//     default:
//       throw new Error(`Unhandled action type: ${action.type}`);
//   }
// };



import { TransferHistoryStateType, TransferHistoryActionType } from "./TransferHistoryState";

export const transferHistoryReducer = (
  state: TransferHistoryStateType,
  action: TransferHistoryActionType
): TransferHistoryStateType => {
  const actionType = action.type

  switch (action.type) {
    case "GET_TRANSACTIONS":
      return { ...state, transactions: action.payload };
    case "ADD_TRANSACTION":
      return { ...state, transactions: [...state.transactions, action.payload] };
    case "SELECT_TRANSACTION":
      return { ...state, selectedTransaction: action.payload };
    default:
      throw new Error(`Unhandled action type: ${actionType}`);
  }
};
