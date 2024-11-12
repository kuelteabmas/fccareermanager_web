"use client";

import { useState, useEffect } from 'react';
import { transferHistoryObj } from "@/types/transferhistory";
import Image from "next/image";
import Link from "next/link"
import { useTransferHistory } from '@/app/context/TransferHistoryContext';

const TransferHistoryTable = () => {
  const { setSelectedTransferHistory } = useTransferHistory();
  const [transferHistoryData, setTransferHistoryData] = useState<transferHistoryObj[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8892/api/v1/transferhistory");
        if (!response.ok) throw new Error("Failed to fetch data");

        const data: transferHistoryObj[] = await response.json();
        setTransferHistoryData(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Transactions
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          {/* Table Headers */}
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Player
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Age
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Parent Team
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Loan Team
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Transfer Fee
            </h5>
          </div>
        </div>

        {/* Table Rows */}
        {transferHistoryData.map((item) => (
          <Link
          key={item.id}
          href={`/transferhistory/details/${item.id}`}
          onClick={() => setSelectedTransferHistory(item)}
          className={`grid grid-cols-3 sm:grid-cols-5 ${
            item === transferHistoryData[transferHistoryData.length - 1]
              ? ""
              : "border-b border-stroke dark:border-strokedark"
          }`}        
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <div className="flex-shrink-0">
                <Image src="/player.png" alt="Player" width={48} height={48} />
              </div>
              <p className="hidden text-black dark:text-white sm:block">
                {item.playerId}
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3 dark:text-white">{item.age}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{item.negotiationDealDetail.parentTeam}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">{item.negotiationDealDetail.tempTeam}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-meta-3">${item.dealFinancialsDetail.transferFee}.00</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TransferHistoryTable;
