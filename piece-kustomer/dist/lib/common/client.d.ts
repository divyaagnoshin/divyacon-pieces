import { KustomerJsonObject, KustomerJsonValue } from './types';
declare function validateAuth({ apiKey, }: {
    apiKey: string;
}): Promise<void>;
declare function createCustomer({ apiKey, customer, }: {
    apiKey: string;
    customer: KustomerJsonObject;
}): Promise<KustomerJsonValue>;
declare function createConversation({ apiKey, conversation, }: {
    apiKey: string;
    conversation: KustomerJsonObject;
}): Promise<KustomerJsonValue>;
declare function updateConversation({ apiKey, conversationId, updates, }: {
    apiKey: string;
    conversationId: string;
    updates: KustomerJsonObject;
}): Promise<KustomerJsonValue>;
declare function getCustomer({ apiKey, customerId, }: {
    apiKey: string;
    customerId: string;
}): Promise<KustomerJsonValue>;
declare function getCustomObjects({ apiKey, klassName, fromDate, }: {
    apiKey: string;
    klassName: string;
    fromDate?: string;
}): Promise<KustomerJsonValue>;
declare function createAuthHeaders({ apiKey, }: {
    apiKey: string;
}): Record<string, string>;
export declare const kustomerClient: {
    validateAuth: typeof validateAuth;
    createCustomer: typeof createCustomer;
    createConversation: typeof createConversation;
    updateConversation: typeof updateConversation;
    getCustomer: typeof getCustomer;
    getCustomObjects: typeof getCustomObjects;
    createAuthHeaders: typeof createAuthHeaders;
};
export declare const KUSTOMER_API_BASE_URL = "https://api.kustomerapp.com/v1";
export {};
//# sourceMappingURL=client.d.ts.map