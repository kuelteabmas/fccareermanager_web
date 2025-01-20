// // "use client";

// // import { useState, useEffect } from 'react';
// // import { transferHistoryObj } from "@/types/transferhistory";
// // import Image from "next/image";
// // import Link from "next/link"
// // import { useTransferHistoryContext } from '@/app/context/TransferHistory/TransferHistoryContext';

// // const TransferHistoryTable = () => {

// //   const { state: transferHistoryState, dispatch: transferHistoryDispatch } = useTransferHistoryContext();
// //   const [transferHistoryData, setTransferHistoryData] = useState<transferHistoryObj[]>([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState<string | null>(null);

// //   // useEffect(() => {
// //   //   const fetchData = async () => {
// //   //     try {
// //   //       const response = await fetch("http://localhost:8892/api/v1/transferhistory");
// //   //       if (!response.ok) throw new Error("Failed to fetch data");

// //   //       const data: transferHistoryObj[] = await response.json();
// //   //       setTransferHistoryData(data);
// //   //     } catch (err: any) {
// //   //       setError(err.message);
// //   //     } finally {
// //   //       setLoading(false);
// //   //     }
// //   //   };

// //   //   fetchData();
// //   // }, []);
  


// //   useEffect(() => {
// //     transferHistoryDispatch({ type: "GET_TRANSACTIONS"})

// //     // const fetchedTransactions = transferHistoryState.transactions;
// //     // transferHistoryDispatch({ type: "GET_TRANSACTIONS", payload: fetchedTransactions})
// //   }, []);


// //   // const getFetchedTransactions = () => {
// //   //   const fetchedTransactions = transferHistoryState.transactions;
// //   //   transferHistoryDispatch({ type: "GET_TRANSACTIONS", payload: fetchedTransactions})
// //   // }

// //   // Handler for selecting a transaction
// //   const handleSelectTransaction = (transactionId: string) => {
// //     const selectedTransaction = transferHistoryState.transactions.find(
// //       (transaction) => transaction.id === transactionId
// //     );

// //     if (selectedTransaction) {
// //       transferHistoryDispatch({ type: "SELECT_TRANSACTION", payload: selectedTransaction });
// //     }
// //   };

// //   if (loading) return <p>Loading...</p>;
// //   if (error) return <p>Error: {error}</p>;

// //   return (
// //     <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
// //       <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
// //         Transactions
// //       </h4>

// //       <div className="flex flex-col">
// //         <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
// //           {/* Table Headers */}
// //           <div className="p-2.5 xl:p-5">
// //             <h5 className="text-sm font-medium uppercase xsm:text-base">
// //               Player
// //             </h5>
// //           </div>
// //           <div className="p-2.5 text-center xl:p-5">
// //             <h5 className="text-sm font-medium uppercase xsm:text-base">
// //               Age
// //             </h5>
// //           </div>
// //           <div className="hidden p-2.5 text-center sm:block xl:p-5">
// //             <h5 className="text-sm font-medium uppercase xsm:text-base">
// //               Parent Team
// //             </h5>
// //           </div>
// //           <div className="hidden p-2.5 text-center sm:block xl:p-5">
// //             <h5 className="text-sm font-medium uppercase xsm:text-base">
// //               Loan Team
// //             </h5>
// //           </div>
// //           <div className="p-2.5 text-center xl:p-5">
// //             <h5 className="text-sm font-medium uppercase xsm:text-base">
// //               Transfer Fee
// //             </h5>
// //           </div>
// //         </div>

// //         {/* Table Rows */}
// //         {transferHistoryState.transactions.map((transaction) => (
// //           <Link
// //           key={transaction.id}
// //           href={`/transferhistory/details/${transaction.id}`}
// //           onClick={() => handleSelectTransaction(transaction.id)}
// //           className={`grid grid-cols-3 sm:grid-cols-5 ${
// //             transaction === transferHistoryData[transferHistoryData.length - 1]
// //               ? ""
// //               : "border-b border-stroke dark:border-strokedark"
// //           }`}        
// //           >
// //             <div className="flex items-center gap-3 p-2.5 xl:p-5">
// //               <div className="flex-shrink-0">
// //                 <Image src="/player.png" alt="Player" width={48} height={48} />
// //               </div>
// //               <p className="hidden text-black dark:text-white sm:block">
// //                 {transaction.playerId}
// //               </p>
// //             </div>

// //             <div className="flex items-center justify-center p-2.5 xl:p-5">
// //               <p className="text-meta-3 dark:text-white">{transaction.age}</p>
// //             </div>

// //             <div className="flex items-center justify-center p-2.5 xl:p-5">
// //               <p className="text-black dark:text-white">{transaction.negotiationDealDetail.parentTeam}</p>
// //             </div>

// //             <div className="flex items-center justify-center p-2.5 sm:flex xl:p-5">
// //               <p className="text-black dark:text-white">{transaction.negotiationDealDetail.tempTeam}</p>
// //             </div>

// //             <div className="flex items-center justify-center p-2.5 sm:flex xl:p-5">
// //               <p className="text-meta-3">${transaction.dealFinancialsDetail.transferFee}.00</p>
// //             </div>
// //           </Link>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default TransferHistoryTable;


// "use client";

// import React, { useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { useTransferHistoryContext } from "@/app/context/TransferHistory/TransferHistoryContext";

// const TransferHistoryTable = () => {
//   const context = useTransferHistoryContext();

//   if (!context) {
//     throw new Error("TransferHistoryTable must be used within a TransferHistoryProvider");
//   }

//   const { state: transferHistoryState, dispatch: transferHistoryDispatch } = context;

//   // useEffect(() => {
//   //   console.log("Fetching transactions..........");

//   //   const fetchTransactions = async () => {
//   //     await transferHistoryDispatch({ type: "GET_TRANSACTIONS" });
//   //   };
//   //   fetchTransactions();
//   //   console.log("Fetched transactionsssssssss");
//   // }, [transferHistoryDispatch]);

//   // const handleSelectTransaction = (transactionId: string) => {
//   //   const selectedTransaction = transferHistoryState?.transactions?.find(
//   //     (transaction) => transaction.id === transactionId
//   //   );
//   //   if (selectedTransaction) {
//   //     transferHistoryDispatch({ type: "SELECT_TRANSACTION", payload: selectedTransaction });
//   //   }
//   // };

//   // if (!transferHistoryState?.transactions) {
//   //   return <p>Loading transactions...</p>;
//   // }

  

//   useEffect(() => {
//     // Ensure this only runs once
//     let isMounted = true;
  
//     const fetchTransactions = async () => {
//       if (isMounted) {
//         console.log("Dispatching GET_TRANSACTIONS");
//         await transferHistoryDispatch({ type: "GET_TRANSACTIONS" });
//       }
//       fetchTransactions();
//     };
  
//     // fetchTransactions();
  
//     return () => {
//       isMounted = false; // Cleanup flag to prevent further updates
//     };
//   }, [transferHistoryDispatch]);
  

//   return (
//     <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
//       <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">Transactions</h4>
//       <div className="flex flex-col">
//         {/* Table Header */}
//         <div className="grid grid-cols-3 bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
//           <div className="p-2.5 xl:p-5">
//             <h5 className="text-sm font-medium uppercase">Player</h5>
//           </div>
//           <div className="p-2.5 text-center xl:p-5">
//             <h5 className="text-sm font-medium uppercase">Age</h5>
//           </div>
//           <div className="hidden p-2.5 text-center sm:block xl:p-5">
//             <h5 className="text-sm font-medium uppercase">Parent Team</h5>
//           </div>
//           <div className="hidden p-2.5 text-center sm:block xl:p-5">
//             <h5 className="text-sm font-medium uppercase">Loan Team</h5>
//           </div>
//           <div className="p-2.5 text-center xl:p-5">
//             <h5 className="text-sm font-medium uppercase">Transfer Fee</h5>
//           </div>
//         </div>

//         {/* Table Body */}
//         {transferHistoryState.transactions.map((transaction) => (
//           <Link
//             key={transaction.id}
//             href={`/transferhistory/details/${transaction.id}`}
//             onClick={() => handleSelectTransaction(transaction.id)}
//             className={`grid grid-cols-3 sm:grid-cols-5 border-b dark:border-strokedark`}
//           >
//             <div className="flex items-center gap-3 p-2.5 xl:p-5">
//               <Image src="/player.png" alt="Player" width={48} height={48} />
//               <p className="hidden sm:block">{transaction.playerId}</p>
//             </div>
//             <div className="p-2.5 xl:p-5 text-center">{transaction.age}</div>
//             <div className="hidden p-2.5 sm:block xl:p-5 text-center">{transaction.negotiationDealDetail.parentTeam}</div>
//             <div className="hidden p-2.5 sm:block xl:p-5 text-center">{transaction.negotiationDealDetail.tempTeam}</div>
//             <div className="p-2.5 xl:p-5 text-center">{transaction.dealFinancialsDetail.transferFee}</div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TransferHistoryTable;

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTransferHistoryContext } from "@/app/context/TransferHistory/TransferHistoryContext";

const TransferHistoryTable = () => {
  const { state, dispatch } = useTransferHistoryContext();

  // Handler for selecting a transaction
  const handleSelectTransaction = (transactionId: string) => {
    const selectedTransaction = state.transactions.find(
      (transaction) => transaction.id === transactionId
    );
    if (selectedTransaction) {
      dispatch({ type: "SELECT_TRANSACTION", payload: selectedTransaction });
    }
  };

  if (!state.transactions.length) {
    return <p>No transactions found.</p>;
  }

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">Transactions</h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          {/* Table Headers */}
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">Player</h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">Age</h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">Parent Team</h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">Loan Team</h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">Transfer Fee</h5>
          </div>
        </div>

        {/* Table Rows */}
        {state.transactions.map((transaction) => (
          <Link
            key={transaction.id}
            href={`/transferhistory/details/${transaction.id}`}
            onClick={() => handleSelectTransaction(transaction.id)}
            className={`grid grid-cols-3 sm:grid-cols-5 ${
              transaction === state.transactions[state.transactions.length - 1]
                ? ""
                : "border-b border-stroke dark:border-strokedark"
            }`}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <div className="flex-shrink-0">
                <Image src="/player.png" alt="Player" width={48} height={48} />
              </div>
              <p className="hidden text-black dark:text-white sm:block">{transaction.playerId}</p>
            </div>
            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3 dark:text-white">{transaction.age}</p>
            </div>
            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{transaction.negotiationDealDetail.parentTeam}</p>
            </div>
            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{transaction.negotiationDealDetail.tempTeam}</p>
            </div>
            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3">${transaction.dealFinancialsDetail.transferFee}.00</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TransferHistoryTable;
