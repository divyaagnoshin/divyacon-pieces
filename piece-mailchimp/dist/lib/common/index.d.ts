import { OAuth2PropertyValue } from '@agnocon/pieces-framework';
export declare const mailchimpCommon: {
    mailChimpListIdDropdown: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    getUserLists: (authProp: OAuth2PropertyValue) => Promise<any>;
    mailChimpCampaignIdDropdown: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    getUserCampaigns: (authProp: OAuth2PropertyValue, options?: {
        status?: string;
    }) => Promise<any>;
    mailChimpDraftCampaignIdDropdown: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    mailChimpStoreIdDropdown: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    getUserStores: (authProp: OAuth2PropertyValue) => Promise<any>;
    getMailChimpServerPrefix: (access_token: string) => Promise<any>;
    enableWebhookRequest: ({ server, token, listId, webhookUrl, events, }: EnableTriggerRequestParams) => Promise<string>;
    disableWebhookRequest: ({ server, token, listId, webhookId, }: DisableTriggerRequestParams) => Promise<void>;
    getMD5EmailHash: (email: string) => string;
};
type TriggerRequestParams = {
    server: string;
    token: string;
    listId: string;
};
type EnableTriggerRequestParams = TriggerRequestParams & {
    webhookUrl: string;
    events: object;
};
type DisableTriggerRequestParams = TriggerRequestParams & {
    webhookId: string;
};
export {};
//# sourceMappingURL=index.d.ts.map