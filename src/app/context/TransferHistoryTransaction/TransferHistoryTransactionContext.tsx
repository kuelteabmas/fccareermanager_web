"use client";

import React, { createContext, useContext } from "react";
import { TransferHistoryTransactionStateType } from "./TransferHistoryTransactionState";

export const TransferHistoryTransactionContext = createContext<{
  state: TransferHistoryTransactionStateType;
  dispatch: React.Dispatch<any>;
} | null>(null);

export const useTransferHistoryTransactionContext = () => {
  const context = useContext(TransferHistoryTransactionContext);
  if (!context) {
    throw new Error("useTransferHistoryTransactionContext must be used within a TransferHistoryTransactionProvider");
  }
  return context;
};