
import { Metadata } from "next";
import Link from "next/link";

import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TransferHistoryTable from "@/components/transferhistory/TransferHistoryTable";

export const metadata: Metadata = {
  title: "Transfer History | FCMR",
  description:
    "Transfer History | EA FC / FIFA Career Manager Repository Tracker",
};

const TransferHistoryPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Transfer History" />

      <div className="flex flex-col gap-10">
        <TransferHistoryTable />
      </div>

      <div className="flex m-10 justify-end">
        <Link
          href="/transferhistory/transaction"
          className="inline-flex items-center justify-center bg-primary px-10 py-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
        >
          Create New Transaction
        </Link>
      </div>
    </DefaultLayout>
  );
};

export default TransferHistoryPage;
