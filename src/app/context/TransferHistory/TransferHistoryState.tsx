// import React, { useReducer } from "react";
// import { TransferHistoryContext } from "./TransferHistoryContext";
// import { transferHistoryReducer } from "./TransferHistoryReducer";
// import { transferHistoryObj } from "@/types/transferhistory";

// import axios from "axios";

// // export interface TransferHistoryItem {
// //   id: string;
// //   playerId: string;
// //   date: string;
// //   negotiationDealDetail: object;
// //   dealFinancialsDetail: object;
// //   playerGrowthDetail: object;
// // }

// export interface TransferHistoryStateType {
//   transactions: transferHistoryObj[];
//   selectedTransaction: transferHistoryObj | null;
// }

// export type TransferHistoryActionType =
// //   | { type: "GET_TRANSACTIONS" }
//   | { type: "GET_TRANSACTIONS", payload: transferHistoryObj[]}
//   | { type: "ADD_TRANSACTION"; payload: transferHistoryObj }
//   | { type: "SELECT_TRANSACTION"; payload: transferHistoryObj }
//   | { type: "CLEAR_FORM" };

// const initialState: TransferHistoryStateType = {
//   transactions: [],
//   selectedTransaction: null,
// };

// export const TransferHistoryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [state, dispatch] = useReducer(transferHistoryReducer, initialState);

//   const getTransactions = async () => {
//     try {
//       console.log("Fetching Transactions...");

//       const response = await axios.get("http://localhost:8892/api/v1/transferhistory", {
//         headers: { "Content-Type": "application/json" },
//       })
//       console.log("Transactions fetched successfully:", response.data);
//     //   dispatch({ type: "GET_TRANSACTIONS"});
//       dispatch({ type: "GET_TRANSACTIONS", payload: response.data });
//     } catch (error) {
//         console.error("Error fetching transactions:", error);
//     }
//   };


//   // Middleware-like function to handle POST request for adding a transaction
//   const addTransaction = async (transaction: any) => {
//     try {
//       console.log("Adding Transaction...");

//       const response = await axios.post("http://localhost:8892/api/v1/transferhistory", transaction, {
//         headers: { "Content-Type": "application/json" },
//       });
//       console.log("Transaction added successfully:", response.data);
//       dispatch({ type: "ADD_TRANSACTION", payload: transaction });
//     } catch (error) {
//       console.error("Error adding transaction:", error);
//     }
//   };

//     // Custom dispatch function to handle side effects
//     const enhancedDispatch = async (action: Action) => {
//         if (action.type === "ADD_TRANSACTION" && action.payload) {
//           await addTransaction(action.payload);
//         } 
//         else if (action.type === "GET_TRANSACTIONS") {
//           await getTransactions();
//         } else {
//           dispatch(action);
//         }
//       };
    

//   return (
//     <TransferHistoryContext.Provider value={{ ...state, enhancedDispatch }}>
//       {children}
//     </TransferHistoryContext.Provider>
//   );

// //   return (
// //     <TransferHistoryContext.Provider value={{ ...state, addTransaction, getTransactions }}>
// //       {children}
// //     </TransferHistoryContext.Provider>
// //   );
// };


"use client";

import React, { useReducer } from "react";
import { TransferHistoryContext } from "./TransferHistoryContext";
import { transferHistoryReducer } from "./TransferHistoryReducer";
import axios from "axios";
import { transferHistoryObj } from "@/types/transferhistory";

export interface TransferHistoryStateType {
  transactions: transferHistoryObj[];
  selectedTransaction: transferHistoryObj | null;
}

export type TransferHistoryActionType =
  | { type: "GET_TRANSACTIONS"; payload: transferHistoryObj[] }
  | { type: "ADD_TRANSACTION"; payload: transferHistoryObj }
  | { type: "SELECT_TRANSACTION"; payload: transferHistoryObj };

const initialState: TransferHistoryStateType = {
  transactions: [],
  selectedTransaction: null,
};

export const TransferHistoryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(transferHistoryReducer, initialState);

  const getTransactions = async () => {
    try {
      console.log("Fetching transactions...");
      const response = await axios.get("http://localhost:8892/api/v1/transferhistory");
      console.log("Transactions fetched successfully:", response.data);
      dispatch({ type: "GET_TRANSACTIONS", payload: response.data });
    } catch (error) {
      console.error("Error fetching transactions: ", error);
    }
  };

    // Middleware-like function to handle POST request for adding a transaction
  const addTransaction = async (transaction: any) => {
    try {
      console.log("Adding Transaction...");

      const response = await axios.post("http://localhost:8892/api/v1/transferhistory", transaction, {
        headers: { "Content-Type": "application/json" },
      });
      console.log("Transaction added successfully: ", response.data);
      dispatch({ type: "ADD_TRANSACTION", payload: transaction });
    } catch (error) {
      console.error("Error adding transaction:", error);
    }
  };

  const selectTransaction = (transaction: any) => {
    console.log("Transaction selected: ", transaction);
    dispatch({
      type: "SELECT_TRANSACTION",
      payload: transaction,
    });
  };

//   works
//      // Fetch transactions when provider mounts
//   React.useEffect((action) => {
//     getTransactions();
//   }, []);

    // Fetch transactions when provider mounts
    React.useEffect(() => {
        getTransactions();
      }, []);

  return (
    <TransferHistoryContext.Provider value={{ 
        state,
        dispatch,
        getTransactions,
        addTransaction,
        selectTransaction}}>
      {children}
    </TransferHistoryContext.Provider>
  );
};
