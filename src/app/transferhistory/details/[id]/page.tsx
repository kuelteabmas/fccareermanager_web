"use client";

import { useTransferHistory } from '@/app/context/TransferHistoryContext';
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

// export const metadata: Metadata = {
//   title: "Transfer History Details| FCMR",
//   description:
//     "Transfer History Details | EA FC / FIFA Career Manager Repository Tracker",
// };

const TransferHistoryDetailsPage = () => {


  const { selectedTransferHistory } = useTransferHistory();

  if (!selectedTransferHistory) {
    return <p>No transfer history selected. Please go back and select an item.</p>;
  }

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Transfer History Details" />

      <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="px-4 pb-6 lg:pb-8 xl:pb-11.5">
          {/* Player Profile Photo*/}
          {/* <div className="relative z-30 mx-auto mt-22 h-30 w-full max-w-30 rounded-full bg-white/20 p-1 backdrop-blur sm:h-44 sm:max-w-44 sm:p-3">
              <div className="relative drop-shadow-2">
                <Image
                  src={"/images/user/user-06.png"}
                  width={160}
                  height={160}
                  style={{
                    width: "auto",
                    height: "auto",
                  }}
                  alt="profile"
                />
              </div>
            </div> */}
          <div className="">
            <h3 className="text-1xl mt-10 text-center font-semibold text-black dark:text-white">
              Player Info
            </h3>

            <div className="mt-4 grid grid-cols-6 text-center">
              <div className="">
                <h3 className="text-1xl mt-2 font-semibold text-black dark:text-white">
                  Player Name
                </h3>
                <p className="font-medium">{selectedTransferHistory.playerId}</p>
              </div>

              <div>
                <h3 className="text-1xl mt-2 font-semibold text-black dark:text-white">
                  Player Age
                </h3>
                <p className="font-medium">{selectedTransferHistory.age}</p>
              </div>

              <div>
                <h3 className="text-1xl mt-2 font-semibold text-black dark:text-white">
                  Season Transfer Window
                </h3>
                <p className="font-medium">{selectedTransferHistory.seasonTransferWindow}</p>
              </div>

              <div>
                <h3 className="text-1xl mt-2 font-semibold text-black dark:text-white">
                  Season Year
                </h3>
                <p className="font-medium">{selectedTransferHistory.seasonYear}</p>
              </div>

              <div>
                <h3 className="text-1xl mt-2 font-semibold text-black dark:text-white">
                  Deal Type
                </h3>
                <p className="font-medium">{selectedTransferHistory.negotiationDealDetail.dealType}</p>
              </div>

              <div>
                <h3 className="text-1xl mt-2 font-semibold text-black dark:text-white">
                  Loan Type
                </h3>
                <p className="font-medium">{selectedTransferHistory.negotiationDealDetail.loanType}</p>
              </div>
            </div>

            <h3 className="text-1xl mt-10 text-center font-semibold text-black dark:text-white">
              Negotiation Details
            </h3>

            <div className="mt-4 grid grid-cols-6 text-center">
              <div className="">
                <h3 className="text-1xl mt-2 font-semibold text-black dark:text-white">
                  Parent Team
                </h3>
                <p className="font-medium">{selectedTransferHistory.negotiationDealDetail.parentTeam}</p>
              </div>

              <div>
                <h3 className="text-1xl mt-2 font-semibold text-black dark:text-white">
                  New Team
                </h3>
                <p className="font-medium">{selectedTransferHistory.negotiationDealDetail.tempTeam}</p>
              </div>

              <div>
                <h3 className="text-1xl mt-2 font-semibold text-black dark:text-white">
                  Loan Duration
                </h3>
                <p className="font-medium">{selectedTransferHistory.negotiationDealDetail.loanDurationInMonths} months</p>
              </div>

              <div>
                <h3 className="text-1xl mt-2 font-semibold text-black dark:text-white">
                  Contract Start Date
                </h3>
                <p className="font-medium">{selectedTransferHistory.negotiationDealDetail.contractStartDate}</p>
              </div>

              <div>
                <h3 className="text-1xl mt-2 font-semibold text-black dark:text-white">
                  Contract End Date
                </h3>
                <p className="font-medium">{selectedTransferHistory.negotiationDealDetail.contractEndDate}</p>
              </div>

              <div>
                <h3 className="text-1xl mt-2 font-semibold text-black dark:text-white">
                  Swapped Player
                </h3>
                <p className="font-medium">{selectedTransferHistory.negotiationDealDetail.playerSwappedId}</p>
              </div>
            </div>

            <h3 className="text-1xl mt-10 text-center font-semibold text-black dark:text-white">
              Deal Financials Details
            </h3>

            <div className="mt-4 grid grid-cols-6 text-center">
              <div className="">
                <h3 className="text-1xl mt-2 font-semibold text-black dark:text-white">
                  Pre Deal Wage
                </h3>
                <p className="font-medium">{selectedTransferHistory.dealFinancialsDetail.preDealWage}</p>
              </div>

              <div>
                <h3 className="text-1xl mt-2 font-semibold text-black dark:text-white">
                  Post Deal Wage
                </h3>
                <p className="font-medium">{selectedTransferHistory.dealFinancialsDetail.postDealWage}</p>
              </div>

              <div>
                <h3 className="text-1xl mt-2 font-semibold text-black dark:text-white">
                  Release Clause
                </h3>
                <p className="font-medium">{selectedTransferHistory.dealFinancialsDetail.releaseClauseAmount}</p>
              </div>

              <div>
                <h3 className="text-1xl mt-2 font-semibold text-black dark:text-white">
                  Performance Bonus Type
                </h3>
                <p className="font-medium">{selectedTransferHistory.dealFinancialsDetail.performanceBonusType}</p>
              </div>

              <div>
                <h3 className="text-1xl mt-2 font-semibold text-black dark:text-white">
                  Performance Bonus Count
                </h3>
                <p className="font-medium">{selectedTransferHistory.dealFinancialsDetail.performanceBonusCount}</p>
              </div>

              <div>
                <h3 className="text-1xl mt-2 font-semibold text-black dark:text-white">
                  Performance Bonus Sum
                </h3>
                <p className="font-medium">{selectedTransferHistory.dealFinancialsDetail.performanceBonusSum}</p>
              </div>
            </div>

            <h3 className="text-1xl mt-10 text-center font-semibold text-black dark:text-white">
              Player Growth Details
            </h3>

            <div className="mt-4 grid grid-cols-6 text-center">
              <div className="">
                <h3 className="text-1xl mt-2 font-semibold text-black dark:text-white">
                  Pre Deal Player Status
                </h3>
                <p className="font-medium">{selectedTransferHistory.playerGrowthDetail.preDealPlayerStatus}</p>
              </div>

              <div>
                <h3 className="text-1xl mt-2 font-semibold text-black dark:text-white">
                  Post Deal Player Status
                </h3>
                <p className="font-medium">{selectedTransferHistory.playerGrowthDetail.postDealPlayerStatus}</p>
              </div>

              <div>
                <h3 className="text-1xl mt-2 font-semibold text-black dark:text-white">
                  Pre Deal Player Overall
                </h3>
                <p className="font-medium">{selectedTransferHistory.playerGrowthDetail.preDealPlayerOverrall}</p>
              </div>

              <div>
                <h3 className="text-1xl mt-2 font-semibold text-black dark:text-white">
                  Post Deal Player Overall
                </h3>
                <p className="font-medium">{selectedTransferHistory.playerGrowthDetail.postDealPlayerOverrall}</p>
              </div>

              <div>
                <h3 className="text-1xl mt-2 font-semibold text-black dark:text-white">
                  Overall Growth Percentage
                </h3>
                <p className="font-medium">{selectedTransferHistory.playerGrowthDetail.overallGrowthPercentage}%</p>
              </div>

              <div>
                <h3 className="text-1xl mt-2 font-semibold text-black dark:text-white">
                  Updated Market Value
                </h3>
                <p className="font-medium">{selectedTransferHistory.playerGrowthDetail.updatedMarketValue}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default TransferHistoryDetailsPage;
