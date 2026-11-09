export declare const workableCommon: {
    subscribeWebhook: (subdomain: string, accessToken: string, webhookUrl: string, event: string, args?: Record<string, any>) => Promise<{
        id: string;
    }>;
    unsubscribeWebhook: (subdomain: string, accessToken: string, subscriptionId: string) => Promise<import("@agnocon/pieces-common").HttpResponse<any>>;
};
//# sourceMappingURL=webhooks.d.ts.map