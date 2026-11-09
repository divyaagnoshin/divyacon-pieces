export declare function subscribeChargebeeWebhook(site: string, apiKey: string, webhookUrl: string, eventType: string): Promise<string>;
export declare function unsubscribeChargebeeWebhook(site: string, apiKey: string, webhookId: string): Promise<void>;
export declare function fetchRecentEvents(site: string, apiKey: string, eventType: string): Promise<unknown[]>;
//# sourceMappingURL=webhook.d.ts.map