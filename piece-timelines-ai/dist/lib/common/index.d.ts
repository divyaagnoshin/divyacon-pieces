import { AuthenticationParams, CreateWebhookParams, CreateWebhookResponse, DeleteWebhookParams, DeleteWebhookResponse, GetChatsParams, GetChatsResponse, GetMessageParams, GetMessageResponse, GetUploadedFileParams, GetUploadedFileResponse, GetWhatsappAccountsResponse, ListUploadedFilesParams, ListUploadedFilesResponse, SendMessageToExistingChatParams, SendMessageToJidParams, SendMessageToPhoneNumberParams, UpdateChatParams, UpdateChatResponse, UploadFileParams, UploadFileResponse } from './types';
export declare const timelinesAiAuth: import("@agnocon/pieces-framework").SecretTextProperty<true>;
export declare const timelinesAiCommon: {
    baseUrl: string;
    getHeaders: (apiKey: string) => {
        Authorization: string;
    };
    endpoints: {
        sendMessageToExistingChat: (chat_id: number) => string;
        sendMessageToPhoneNumber: string;
        sendMessageToJid: string;
        updateChat: (chat_id: string) => string;
        getChats: string;
        getMessage: (message_id: string) => string;
        getUploadedFile: (file_id: string) => string;
        listUploadedFiles: string;
        getWhatsappAccounts: string;
        uploadFile: string;
        createWebhook: string;
        deleteWebhook: (webhook_id: number) => string;
    };
    sendMessageToExistingChat: ({ apiKey, ...messageParams }: SendMessageToExistingChatParams) => Promise<import("./types").BaseMessageUidResponse>;
    sendMessageToPhoneNumber: ({ apiKey, ...messageParams }: SendMessageToPhoneNumberParams) => Promise<import("./types").BaseMessageUidResponse>;
    sendMessageToJid: ({ apiKey, ...messageParams }: SendMessageToJidParams) => Promise<import("./types").BaseMessageUidResponse>;
    updateChat: ({ apiKey, ...chatParams }: UpdateChatParams) => Promise<UpdateChatResponse>;
    getChats: ({ apiKey, ...chatParams }: GetChatsParams) => Promise<GetChatsResponse>;
    getMessage: ({ apiKey, message_uid }: GetMessageParams) => Promise<GetMessageResponse>;
    getUploadedFile: ({ apiKey, file_uid }: GetUploadedFileParams) => Promise<GetUploadedFileResponse>;
    listUploadedFiles: ({ apiKey, filename }: ListUploadedFilesParams) => Promise<ListUploadedFilesResponse>;
    listWhatsappAccounts: ({ apiKey }: AuthenticationParams) => Promise<GetWhatsappAccountsResponse>;
    uploadFile: ({ apiKey, ...fileParams }: UploadFileParams) => Promise<UploadFileResponse>;
    createWebhook: ({ apiKey, ...webhookParams }: CreateWebhookParams) => Promise<CreateWebhookResponse>;
    deleteWebhook: ({ apiKey, webhook_id }: DeleteWebhookParams) => Promise<DeleteWebhookResponse>;
};
//# sourceMappingURL=index.d.ts.map