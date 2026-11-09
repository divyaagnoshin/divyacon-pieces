import { FacebookLead, FacebookPageDropdown, FacebookPaginatedResponse } from './types';
export declare const facebookLeadsCommon: {
    baseUrl: string;
    page: import("@agnocon/pieces-framework").DropdownProperty<FacebookPageDropdown, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    form: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    subscribePageToApp: (pageId: any, accessToken: string) => Promise<void>;
    getPageForms: (pageId: string, accessToken: string) => Promise<any>;
    getLeadDetails: (leadId: string, accessToken: string) => Promise<FacebookLead>;
    loadSampleData: (formId: string, accessToken: string) => Promise<FacebookPaginatedResponse<FacebookLead>>;
    transformLeadData: (leadData: FacebookLead) => {
        lead_id: string;
        form_id: string;
        platform: string;
        ad_id: string;
        ad_name: string;
        adset_id: string;
        adset_name: string;
        campaign_id: string;
        campaign_name: string;
        created_time: string;
        data: {};
    };
};
//# sourceMappingURL=index.d.ts.map