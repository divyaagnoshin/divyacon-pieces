import type { TallyForm, TallySubmissionsApiResponse } from './types';
export declare const TALLY_API_BASE = "https://api.tally.so";
export declare const tallyApiClient: {
    validateApiKey: typeof validateApiKey;
    listForms: typeof listForms;
    createWebhook: typeof createWebhook;
    deleteWebhook: typeof deleteWebhook;
    fetchRecentSubmissions: typeof fetchRecentSubmissions;
};
declare function validateApiKey(apiKey: string): Promise<void>;
declare function listForms(apiKey: string): Promise<TallyForm[]>;
declare function createWebhook({ apiKey, formId, webhookUrl, }: {
    apiKey: string;
    formId: string;
    webhookUrl: string;
}): Promise<string>;
declare function deleteWebhook({ apiKey, webhookId, }: {
    apiKey: string;
    webhookId: string;
}): Promise<void>;
declare function fetchRecentSubmissions({ apiKey, formId, }: {
    apiKey: string;
    formId: string;
}): Promise<TallySubmissionsApiResponse>;
export {};
//# sourceMappingURL=client.d.ts.map