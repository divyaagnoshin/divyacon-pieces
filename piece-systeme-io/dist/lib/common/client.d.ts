import { HttpMethod } from '@agnocon/pieces-common';
export declare const systemeIoCommon: {
    baseUrl: string;
    apiCall<T>({ method, url, body, auth, headers, }: {
        method: HttpMethod;
        url: string;
        body?: any;
        auth: string | {
            apiKey: string;
        };
        headers?: Record<string, string>;
    }): Promise<T>;
    verifyWebhookSignature: (webhookSecret?: string, webhookSignatureHeader?: string, webhookRawBody?: any) => boolean;
    createWebhook({ eventType, webhookUrl, auth, secret, }: {
        eventType: string;
        webhookUrl: string;
        auth: string | {
            apiKey: string;
        };
        secret: string;
    }): Promise<{
        id: string;
    }>;
    deleteWebhook({ webhookId, auth, }: {
        webhookId: string;
        auth: string | {
            apiKey: string;
        };
    }): Promise<unknown>;
    getContacts({ auth, limit, startingAfter, }: {
        auth: string | {
            apiKey: string;
        };
        limit?: number;
        startingAfter?: string;
    }): Promise<unknown>;
    getContact({ contactId, auth, }: {
        contactId: string;
        auth: string | {
            apiKey: string;
        };
    }): Promise<unknown>;
    getTags({ auth, }: {
        auth: string | {
            apiKey: string;
        };
    }): Promise<unknown>;
    getContactFields({ auth, }: {
        auth: string | {
            apiKey: string;
        };
    }): Promise<unknown>;
};
//# sourceMappingURL=client.d.ts.map