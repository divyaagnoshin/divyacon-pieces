export interface DigitalPilotClient {
    addTargetAccount(tagId: string, listId: string, domain: string): Promise<void>;
    removeTargetAccount(tagId: string, listId: string, domain: string): Promise<void>;
    createWebhook(tagId: string, webhookURL: string, subscriptions: 'target_accounts' | 'high_intent'): Promise<WebhookResponse>;
    deleteWebhook(tagId: string, webhookURL?: string, webhookID?: string): Promise<void>;
}
export interface WebhookResponse {
    id: string;
    url: string;
    subscriptions: string;
}
export declare function makeClient(auth: string): DigitalPilotClient;
//# sourceMappingURL=client.d.ts.map