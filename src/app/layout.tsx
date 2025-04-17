"use client";
import "jsvectormap/dist/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/satoshi.css";
import "@/css/style.css";
import React, { useEffect, useState } from "react";
import Loader from "@/components/common/Loader";
import { TransferHistoryProvider } from "./context/TransferHistory/TransferHistoryState";
import { TransferHistoryTransactionProvider } from "./context/TransferHistoryTransaction/TransferHistoryTransactionState";
import { GlobalProvider } from "./context/Global/GlobalState";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);

  // useEffect(() => {
  //   setTimeout(() => setLoading(false), 1000);
  // }, []);

  // useEffect(() => {
  //   // Simulate loading time, ensure it clears correctly
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 1000);

  //   return () => clearTimeout(timer); // Cleanup timeout on component unmount
  // }, []);

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <GlobalProvider>
          <TransferHistoryProvider>
          <TransferHistoryTransactionProvider>
            {/* <div className="dark:bg-boxdark-2 dark:text-bodydark">
              {loading ? <Loader /> : children}
            </div> */}
            {children}
            </TransferHistoryTransactionProvider>
          </TransferHistoryProvider>
        </GlobalProvider>
      </body>
    </html>
  );
}
