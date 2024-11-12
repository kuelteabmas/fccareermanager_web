import { createContext, useContext, useState, ReactNode } from 'react';
import { transferHistoryObj } from '@/types/transferhistory';

type TransferHistoryContextType = {
  selectedTransferHistory: transferHistoryObj | null;
  setSelectedTransferHistory: (history: transferHistoryObj) => void;
};

const TransferHistoryContext = createContext<TransferHistoryContextType | undefined>(undefined);

export const TransferHistoryProvider = ({ children }: { children: ReactNode }) => {
  const [selectedTransferHistory, setSelectedTransferHistory] = useState<transferHistoryObj | null>(null);

  return (
    <TransferHistoryContext.Provider value={{ selectedTransferHistory, setSelectedTransferHistory }}>
      {children}
    </TransferHistoryContext.Provider>
  );
};

export const useTransferHistory = () => {
  const context = useContext(TransferHistoryContext);
  if (!context) {
    throw new Error('useTransferHistory must be used within a TransferHistoryProvider');
  }
  return context;
};

