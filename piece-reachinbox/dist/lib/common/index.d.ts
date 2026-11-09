export declare const reachinboxCommon: {
    baseUrl: string;
};
export interface Campaign {
    id: number;
    name: string;
    coreVariables: string[];
    dailyLimit: number;
    mailsSentToday: number;
    accountsToUse: string[];
    tracking: boolean;
    linkTracking: boolean;
    isActive: boolean;
    hasStarted: boolean;
    lastEmailUsed: number;
    delay: number;
    randomDelay: number;
    stopOnReply: boolean;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
    sent: number;
    totalOpens: string | null;
    totalUniqueOpen: string;
    totalReplies: string;
    emails: {
        sent: number;
        totalOpens: number;
        totalReplies: number;
    };
    status: string;
}
export declare const fetchCampaigns: (auth: string) => Promise<Campaign[]>;
export interface AddLeadsRequestBody {
    campaignId: string;
    leads: {
        email: string;
        firstName: string;
        lastName?: string;
    }[];
    newCoreVariables: string[];
    duplicates: any[];
}
export interface AddLeadsResponse {
    success: boolean;
    message: string;
    leadCount: number;
}
export declare const addLeadsToCampaign: (auth: string, body: AddLeadsRequestBody) => Promise<AddLeadsResponse>;
//# sourceMappingURL=index.d.ts.map