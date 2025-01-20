
"use client";
// import { Metadata } from "next";
import { useGlobalContext } from "@/app/context/Global/GlobalContext";
import { useTransferHistoryContext } from "@/app/context/TransferHistory/TransferHistoryContext";
import Link from "next/link";

import DefaultLayout from "@/components/Layouts/DefaultLayout";
import SelectGroupOne from "@/components/SelectGroup/SelectGroupOne";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import SwitcherOne from "@/components/Switchers/SwitcherOne";
import SeasonSelectorDropdown from "@/components/transferhistory/SeasonSelectorDropdown";
import { GlobalProvider } from "@/app/context/Global/GlobalState";
import React from "react";

// export const metadata: Metadata = {
//   title: "New Transaction | FCMR",
//   description:
//     "New Transaction | EA FC / FIFA Career Manager Repository Tracker",
// };


const TransactionPage = () => {
  // const { state: globalState, dispatch: globalDispatch } = useGlobalContext();
  // const { state: transferHistoryState, dispatch: transferHistoryDispatch } = useTransferHistoryContext();

  // const addTransaction = () => {

  //   transferHistoryDispatch({ type: "ADD_TRANSACTION", payload: newTransaction });
  // };


  const { dispatch: transferHistoryDispatch } = useTransferHistoryContext();

  const [formState, setFormState] = React.useState({
    firstName: "",
    lastName: "",
    season: "",
    seasonYear: "",
    dealType: "",
    loanType: "",
    loanDuration: "",
    playerSwapped: "",
    parentTeam: "",
    newTeam: "",
    preDealWage: "",
    postDealWage: "",
    releaseClauseAmount: "",
    transferFee: "",
    signingBonus: "",
    performanceBonusType: "",
    performanceBonusCount: "",
    performanceBonusSum: "",
    preDealStatus: "",
    postDealStatus: "",
    preDealOverall: "",
    postDealOverall: "",
    overallGrowth: "",
    updatedMarketValue: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    transferHistoryDispatch({ type: "ADD_TRANSACTION", payload: formState });
  };
  
  return (
    <DefaultLayout>
      <Breadcrumb pageName="New Transaction" />



      {/* <div className="grid grid-cols-1 gap-9 sm:grid-cols-2"> */}
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-9">
          {/* <!-- Contact Form --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <form onSubmit={handleSubmit}>
              <div className="p-6.5">
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      First name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formState.firstName}
                      onChange={handleInputChange}
                      placeholder="Enter player's first name"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Last name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formState.lastName}
                      onChange={handleInputChange}
                      placeholder="Enter player's last name"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                </div>


                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <SeasonSelectorDropdown />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Season Year
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formState.lastName}
                      onChange={handleInputChange}
                      placeholder="Enter Season Year"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                </div>


                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  {/* <div className="w-full xl:w-1/2">
                    <SeasonSelectorDropdown />
                  </div> */}

                  <div className="w-full xl:w-1/2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Deal Type
                    </label>
                    <input
                      type="text"
                      name="dealType"
                      value={formState.dealType}
                      onChange={handleInputChange}
                      placeholder="Enter Deal Type - Loan or Transfer"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Loan Type
                    </label>
                    <input
                      type="text"
                      name="loanType"
                      value={formState.loanType}
                      onChange={handleInputChange}
                      placeholder="Enter Loan Type - Loan or Loan w/ Buy"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                </div>


                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Loan Duration
                    </label>
                    <input
                      type="text"
                      name="loanDuration"
                      value={formState.loanDuration}
                      onChange={handleInputChange}
                      placeholder="Enter Loan Duration - 6 months, 1 year or 2 years"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Player Swapped?
                    </label>
                    <input
                      type="text"
                      name="playerSwapped"
                      value={formState.playerSwapped}
                      onChange={handleInputChange}
                      placeholder="Swapping with Player?"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                </div>

                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Parent Team
                    </label>
                    <input
                      type="text"
                      name="parentTeam"
                      value={formState.parentTeam}
                      onChange={handleInputChange}
                      placeholder="Enter Parent Team"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      New Team
                    </label>
                    <input
                      type="text"
                      name="newTeam"
                      value={formState.newTeam}
                      onChange={handleInputChange}
                      placeholder="Enter New Team"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                </div>
                
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Pre Deal Wage
                    </label>
                    <input
                      type="text"
                      name="preDealWage"
                      value={formState.preDealWage}
                      onChange={handleInputChange}
                      placeholder="Enter Pre Deal Wage"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Post Deal Wage
                    </label>
                    <input
                      type="text"
                      name="postDealWage"
                      value={formState.postDealWage}
                      onChange={handleInputChange}
                      placeholder="Enter Post Deal Wage"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                </div>

                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Release Clause Amount
                    </label>
                    <input
                      type="text"
                      name="releaseClauseAmount"
                      value={formState.releaseClauseAmount}
                      onChange={handleInputChange}
                      placeholder="Enter Release Clause Amount"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Transfer Fee
                    </label>
                    <input
                      type="text"
                      name="transferFee"
                      value={formState.transferFee}
                      onChange={handleInputChange}
                      placeholder="Enter Transfer Fee"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                </div>

                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Signing Bonus
                    </label>
                    <input
                      type="text"
                      name="signingBonus"
                      value={formState.signingBonus}
                      onChange={handleInputChange}
                      placeholder="Enter Signing Bonus"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Performance Bonus Type
                    </label>
                    <input
                      type="text"
                      name="performanceBonusType"
                      value={formState.performanceBonusType}
                      onChange={handleInputChange}
                      placeholder="Enter Performance Bonus Type"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                </div>

                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Performance Bonus Count
                    </label>
                    <input
                      type="text"
                      name="performanceBonusCount"
                      value={formState.performanceBonusCount}
                      onChange={handleInputChange}
                      placeholder="Enter Performance Bonus Count"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Performance Bonus Sum
                    </label>
                    <input
                      type="text"
                      name="performanceBonusSum"
                      value={formState.performanceBonusSum}
                      onChange={handleInputChange}
                      placeholder="Enter Performance Bonus Sum"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                </div>

                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Pre Deal Player Status
                    </label>
                    <input
                      type="text"
                      name="preDealStatus"
                      value={formState.preDealStatus}
                      onChange={handleInputChange}
                      placeholder="Enter Pre Deal Player Status"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Post Deal Player Status
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formState.postDealStatus}
                      onChange={handleInputChange}
                      placeholder="Enter Post Deal Player Status"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                </div>

                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Pre Deal Player Overrall
                    </label>
                    <input
                      type="text"
                      name="preDealOverall"
                      value={formState.preDealOverall}
                      onChange={handleInputChange}
                      placeholder="Enter Pre Deal Player Overall"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Post Deal Player Overall
                    </label>
                    <input
                      type="text"
                      name="postDealOverall"
                      value={formState.postDealOverall}
                      onChange={handleInputChange}
                      placeholder="Enter Post Deal Player Overall"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                </div>

                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Overall Growth Percentage
                    </label>
                    <input
                      type="text"
                      name="overallGrowth"
                      value={formState.overallGrowth}
                      onChange={handleInputChange}
                      placeholder="Enter Overall Growth Percentage"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Updated Market Value
                    </label>
                    <input
                      type="text"
                      name="updatedMarketValue"
                      value={formState.updatedMarketValue}
                      onChange={handleInputChange}
                      placeholder="Enter Updated Market Value"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                </div>

                <button 
                  // onClick={() => addTransaction}
                  type="submit"
                  className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
                >
                  Create New Transaction
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </DefaultLayout>
  );
};

export default TransactionPage;
