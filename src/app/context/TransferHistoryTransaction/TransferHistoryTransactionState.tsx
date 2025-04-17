
"use client";

import React, { useReducer } from "react";
import { TransferHistoryTransactionContext } from "./TransferHistoryTransactionContext";
import { transferHistoryTransactionReducer } from "./TransferHistoryTransactionReducer";

export interface TransferHistoryTransactionStateType {
    dealType: string;
    isLoanTypeHidden: boolean;

}

export type TransferHistoryTransactionActionType =
  | { type: "SET_DEALTYPE"; payload: dealType }
  | { type: "SHOW_LOANTYPE_DROPDOWN"; payload: isLoanTypeHidden };

const initialState: TransferHistoryTransactionStateType = {
    dealType: "Transfer",
    isLoanTypeHidden: true,
};

export const TransferHistoryTransactionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(transferHistoryTransactionReducer, initialState);

    // Fetch transactions when provider mounts
    React.useEffect(() => {
      }, []);

  return (
    <TransferHistoryTransactionContext.Provider value={{ 
        state,
        dispatch
        }}>
      {children}
    </TransferHistoryTransactionContext.Provider>
  );
};