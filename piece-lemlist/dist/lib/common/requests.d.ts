import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
import { lemlistAuth } from './constants';
export declare const lemlistApiService: {
    fetchTeams(auth: AppConnectionValueForAuthProperty<typeof lemlistAuth>): Promise<any>;
    getLeadByEmail(auth: AppConnectionValueForAuthProperty<typeof lemlistAuth>, email: string): Promise<any>;
    fetchCampaigns(auth: string): Promise<any>;
    removeLeadFromACampaign(auth: AppConnectionValueForAuthProperty<typeof lemlistAuth>, { campaignId, leadEmail }: {
        campaignId: string;
        leadEmail: string;
    }): Promise<any>;
    addLeadToACampaign(auth: AppConnectionValueForAuthProperty<typeof lemlistAuth>, { campaignId, leadEmail, leadData, deduplicate, linkedinEnrichment, findEmail, verifyEmail, findPhone, }: {
        campaignId: string;
        leadEmail: string;
        leadData?: Record<string, unknown>;
        deduplicate?: boolean;
        linkedinEnrichment?: boolean;
        findEmail?: boolean;
        verifyEmail?: boolean;
        findPhone?: boolean;
    }): Promise<any>;
    addLeadVariables(auth: AppConnectionValueForAuthProperty<typeof lemlistAuth>, { leadId, variables }: {
        leadId: string;
        variables: Record<string, unknown>;
    }): Promise<any>;
    updateLeadFromCampaign(auth: AppConnectionValueForAuthProperty<typeof lemlistAuth>, { campaignId, leadEmail, leadData, }: {
        campaignId: string;
        leadEmail: string;
        leadData?: Record<string, unknown>;
    }): Promise<any>;
    unsubscribeLeadFromACampaign(auth: AppConnectionValueForAuthProperty<typeof lemlistAuth>, { campaignId, leadEmail }: {
        campaignId: string;
        leadEmail: string;
    }): Promise<any>;
    markLeadAsInterestedInCampaign(auth: AppConnectionValueForAuthProperty<typeof lemlistAuth>, { campaignId, leadEmail }: {
        campaignId: string;
        leadEmail: string;
    }): Promise<any>;
    markLeadAsInterestedInAllCampaigns(auth: AppConnectionValueForAuthProperty<typeof lemlistAuth>, { leadEmail }: {
        leadEmail: string;
    }): Promise<any>;
    markLeadAsNotInterestedInAllCampaigns(auth: AppConnectionValueForAuthProperty<typeof lemlistAuth>, { leadEmail }: {
        leadEmail: string;
    }): Promise<any>;
    markLeadAsNotInterestedInCampaign(auth: AppConnectionValueForAuthProperty<typeof lemlistAuth>, { campaignId, leadEmail }: {
        campaignId: string;
        leadEmail: string;
    }): Promise<any>;
    pauseLeadInSpecificOrAllCampaigns(auth: AppConnectionValueForAuthProperty<typeof lemlistAuth>, { campaignId, leadEmail }: {
        campaignId?: string;
        leadEmail: string;
    }): Promise<any>;
    resumeLeadInSpecificOrAllCampaigns(auth: AppConnectionValueForAuthProperty<typeof lemlistAuth>, { campaignId, leadEmail }: {
        campaignId?: string;
        leadEmail: string;
    }): Promise<any>;
    removeLeadFromUnsubscribeList(auth: AppConnectionValueForAuthProperty<typeof lemlistAuth>, { leadEmail }: {
        leadEmail: string;
    }): Promise<any>;
    createWebhook(auth: AppConnectionValueForAuthProperty<typeof lemlistAuth>, payload: any): Promise<any>;
    deleteWebhook(auth: AppConnectionValueForAuthProperty<typeof lemlistAuth>, webhookId: string): Promise<any>;
};
//# sourceMappingURL=requests.d.ts.map