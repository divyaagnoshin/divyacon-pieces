export declare const smCommon: {
    baseUrl: string;
    survey: import("@agnocon/pieces-framework").DropdownProperty<unknown, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    getSurveys: (accessToken: string) => Promise<any>;
    subscribeWebhook: (surveyId: string | number, webhookUrl: string, accessToken: string) => Promise<any>;
    unsubscribeWebhook: (webhookId: string | number, accessToken: string) => Promise<import("@agnocon/pieces-common").HttpResponse<any>>;
    getResponseDetails(accessToken: string, surveyId: string | number, responseId: string | number): Promise<any>;
};
//# sourceMappingURL=index.d.ts.map