export declare const formsDropdown: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
export declare const typeformCommon: {
    baseUrl: string;
    subscribeWebhook: (formId: string, tag: string, webhookUrl: string, accessToken: string) => Promise<void>;
    unsubscribeWebhook: (formId: string, tag: string, accessToken: string) => Promise<import("@agnocon/pieces-common").HttpResponse<any>>;
};
//# sourceMappingURL=index.d.ts.map