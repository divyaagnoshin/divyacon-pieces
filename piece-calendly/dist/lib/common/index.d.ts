interface CalendlyUser {
    /**User uri */
    uri: string;
    email: string;
    name: string;
    /**Organization uri */
    current_organization: string;
}
export interface CalendlyWebhookInformation {
    webhookId: string;
}
export declare const calendlyCommon: {
    baseUrl: string;
    scope: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    getUser: (personalToken: string) => Promise<CalendlyUser>;
    authorizationHeader: (personalToken: string) => string;
    UuidFromUri: (uri: string) => string | undefined;
};
export {};
//# sourceMappingURL=index.d.ts.map