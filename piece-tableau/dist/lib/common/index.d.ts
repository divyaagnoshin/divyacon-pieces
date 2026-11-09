export declare function getTableauHeaders(authToken: string): {
    'X-Tableau-Auth': string;
    Accept: string;
    'Content-Type': string;
};
export declare function buildTableauUrl(serverUrl: string, apiVersion: string, siteId: string, endpoint: string): string;
export declare function getAuthToken(auth: any): Promise<{
    token: string;
    siteId: string;
}>;
export declare function listExtractRefreshTasks(auth: any): Promise<any[]>;
export declare function querySites(auth: any): Promise<any[]>;
export declare function queryWorkbooks(auth: any): Promise<any[]>;
export declare function queryViews(auth: any): Promise<any[]>;
export interface WebhookData {
    id?: string;
    name: string;
    event: string;
    destinationUrl: string;
}
export declare function createWebhook(auth: any, webhookData: WebhookData): Promise<string>;
export declare function deleteWebhook(auth: any, webhookId: string): Promise<void>;
export declare function listWebhooks(auth: any): Promise<any[]>;
//# sourceMappingURL=index.d.ts.map