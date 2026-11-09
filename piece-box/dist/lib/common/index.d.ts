import { OAuth2PropertyValue } from '@agnocon/pieces-framework';
export interface WebhookInformation {
    id: string;
    target: string;
    type: string;
    address: string;
    created_at: string;
    created_by: string;
    triggers: string[];
}
export declare const common: {
    baseUrl: string;
    subscribeWebhook(auth: OAuth2PropertyValue, data: {
        event: string;
        target: {
            id: number | string;
            type: string;
        };
        webhookUrl: string;
    }): Promise<WebhookInformation>;
    unsubscribeWebhook(auth: OAuth2PropertyValue, webhookId: string): Promise<import("@agnocon/pieces-common").HttpResponse<any>>;
};
//# sourceMappingURL=index.d.ts.map