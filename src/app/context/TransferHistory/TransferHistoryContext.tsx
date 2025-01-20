// import { createContext, useContext, useState, ReactNode } from 'react';
// import { transferHistoryObj } from '@/types/transferhistory';

// type TransferHistoryContextType = {
//   selectedTransferHistory: transferHistoryObj | null;
//   setSelectedTransferHistory: (history: transferHistoryObj) => void;
// };

// const TransferHistoryContext = createContext<TransferHistoryContextType | undefined>(undefined);

// export const TransferHistoryProvider = ({ children }: { children: ReactNode }) => {
//   const [selectedTransferHistory, setSelectedTransferHistory] = useState<transferHistoryObj | null>(null);

//   return (
//     <TransferHistoryContext.Provider value={{ selectedTransferHistory, setSelectedTransferHistory }}>
//       {children}
//     </TransferHistoryContext.Provider>
//   );
// };

// export const useTransferHistory = () => {
//   const context = useContext(TransferHistoryContext);
//   if (!context) {
//     throw new Error('useTransferHistory must be used within a TransferHistoryProvider');
//   }
//   return context;
// };


"use client";

import React, { createContext, useContext } from "react";
import { TransferHistoryStateType } from "./TransferHistoryState";

export const TransferHistoryContext = createContext<{
  state: TransferHistoryStateType;
  dispatch: React.Dispatch<any>;
} | null>(null);

export const useTransferHistoryContext = () => {
  const context = useContext(TransferHistoryContext);
  if (!context) {
    throw new Error("useTransferHistoryContext must be used within a TransferHistoryProvider");
  }
  return context;
};