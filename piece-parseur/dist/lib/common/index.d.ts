import { CreateDocumentFromFileParams, CreateDocumentFromFileResponse, CreateDocumentParams, CreateDocumentResponse, CreateWebhookParams, CreateWebhookResponse, DeleteWebhookParams, EnableWebhookParams, GetParsedDocumentByIdParams, GetParsedDocumentByIdResponse, ListDocumentsParams, ListDocumentsResponse, ListMailboxesParams, ListMailboxesResponse, ReprocessDocumentParams, ReprocessDocumentResponse } from './types';
export declare const parseurAuth: import("@agnocon/pieces-framework").SecretTextProperty<true>;
export declare const parseurCommon: {
    baseUrl: string;
    endpoints: {
        listDocuments: (parserId: number) => string;
        getParsedDocumentById: (documentId: string) => string;
        createDocument: string;
        createDocumentFromFile: (parserId: number) => string;
        reprocessDocument: (documentId: string) => string;
        listMailboxes: string;
        createWebhook: string;
        enableWebhook: (webhookId: number, mailboxId: number) => string;
        deleteWebhook: (webhookId: number) => string;
    };
    getHeaders: (apiKey: string) => {
        Authorization: string;
        'Content-Type': string;
    };
    listDocuments: ({ apiKey, parserId, ...queryParams }: ListDocumentsParams) => Promise<ListDocumentsResponse>;
    getDocument: ({ apiKey, documentId }: GetParsedDocumentByIdParams) => Promise<GetParsedDocumentByIdResponse>;
    createDocument: ({ apiKey, ...documentParams }: CreateDocumentParams) => Promise<CreateDocumentResponse>;
    createDocumentFromFile: ({ apiKey, file, parserId, }: CreateDocumentFromFileParams) => Promise<CreateDocumentFromFileResponse>;
    reprocessDocument: ({ apiKey, documentId, }: ReprocessDocumentParams) => Promise<ReprocessDocumentResponse>;
    listMailboxes: ({ apiKey, ...queryParams }: ListMailboxesParams) => Promise<ListMailboxesResponse>;
    createWebhook: ({ apiKey, ...webhookParams }: CreateWebhookParams) => Promise<CreateWebhookResponse>;
    enableWebhook: ({ apiKey, webhookId, mailboxId, }: EnableWebhookParams) => Promise<{
        success: boolean;
    }>;
    deleteWebhook: ({ apiKey, webhookId }: DeleteWebhookParams) => Promise<{
        success: boolean;
    }>;
};
//# sourceMappingURL=index.d.ts.map