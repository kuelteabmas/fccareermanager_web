
export interface transferHistoryObj {
    id: string;
    playerId: string;
    age: number;
    seasonYear: number;
    seasonTransferWindow: string;
    date: string; // e.g., "2025-03-06"
    entryCreatedDateTime: string; // e.g., "2024-10-30T16:04:49.725804897"
    negotiationDealDetail: NegotiationDealDetail;
    dealFinancialsDetail: DealFinancialsDetail;
    playerGrowthDetail: PlayerGrowthDetail;
  }
  
  export interface NegotiationDealDetail {
    id: string;
    transferHistoryId: string;
    playerId: string;
    dealType: string; // e.g., "Loan"
    loanType: string | null; // e.g., "LNB", or null
    parentTeam: string;
    tempTeam: string;
    loanDurationInMonths: number;
    contractStartDate: string; // e.g., "2024-06-15"
    contractEndDate: string; // e.g., "2024-12-15"
    playerSwappedId: string | null;
  }
  
  export interface DealFinancialsDetail {
    id: string;
    transferHistoryId: string;
    playerId: string;
    preDealWage: number;
    postDealWage: number;
    releaseClauseAmount: number;
    signingBonus: number;
    performanceBonusType: string; // e.g., "Goals"
    performanceBonusCount: number;
    performanceBonusSum: number;
    transferFee: number;
    sellonClauseAmount: number;
  }
  
  export interface PlayerGrowthDetail {
    id: string;
    transferHistoryId: string;
    playerId: string;
    preDealPlayerStatus: string;
    postDealPlayerStatus: string;
    preDealPlayerOverrall: number;
    postDealPlayerOverrall: number;
    overallGrowthPercentage: number;
    updatedMarketValue: number;
  }
  