import { AppConnectionValueForAuthProperty } from "@agnocon/pieces-framework";
import { codyAuth } from "../..";
export declare const CODY_BASE_URL = "https://getcody.ai/api/v1";
export interface CodyFolder {
    id: string;
    name: string;
}
export interface CodyListFoldersResponse {
    data: CodyFolder[];
}
export interface CodyCreateDocumentResponse {
    data: {
        id: string;
        name: string;
        status: string;
        content_url: string;
        folder_id: string;
        created_at: number;
    };
}
export interface CodySignedUrlResponse {
    data: {
        url: string;
        key: string;
    };
}
export interface CodyConversation {
    id: string;
    name: string;
}
export interface CodyListConversationsResponse {
    data: CodyConversation[];
}
export interface CodyMessageResponse {
    data: {
        id: string;
        content: string;
        conversation_id: string;
        machine: boolean;
        failed_responding: boolean;
        flagged: boolean;
        created_at: number;
    };
}
export interface CodyBot {
    id: string;
    name: string;
}
export interface CodyListBotsResponse {
    data: CodyBot[];
}
export interface CodyCreateConversationResponse {
    data: CodyConversation;
}
export declare const codyClient: {
    listFolders({ secret_text }: AppConnectionValueForAuthProperty<typeof codyAuth>): Promise<CodyFolder[]>;
    createDocument({ secret_text }: AppConnectionValueForAuthProperty<typeof codyAuth>, name: string, folderId: string, content: string): Promise<CodyCreateDocumentResponse>;
    getSignedUrl({ secret_text }: AppConnectionValueForAuthProperty<typeof codyAuth>, fileName: string, contentType: string): Promise<CodySignedUrlResponse["data"]>;
    uploadFileToS3(signedUrl: string, fileBuffer: Buffer, contentType: string): Promise<void>;
    createDocumentFromFile({ secret_text }: AppConnectionValueForAuthProperty<typeof codyAuth>, folderId: string, key: string): Promise<void>;
    listConversations({ secret_text }: AppConnectionValueForAuthProperty<typeof codyAuth>, params?: {
        botId?: string;
        keyword?: string;
    }): Promise<CodyConversation[]>;
    sendMessage({ secret_text }: AppConnectionValueForAuthProperty<typeof codyAuth>, conversationId: string, content: string): Promise<CodyMessageResponse>;
    listBots({ secret_text }: AppConnectionValueForAuthProperty<typeof codyAuth>, keyword?: string): Promise<CodyBot[]>;
    createConversation({ secret_text }: AppConnectionValueForAuthProperty<typeof codyAuth>, botId: string, name: string, documentIds?: string[]): Promise<CodyCreateConversationResponse>;
    get<T>({ secret_text }: AppConnectionValueForAuthProperty<typeof codyAuth>, path: string, queryParams?: Record<string, string>): Promise<T>;
    post<T>({ secret_text }: AppConnectionValueForAuthProperty<typeof codyAuth>, path: string, body: Record<string, unknown>): Promise<T>;
    delete<T>({ secret_text }: AppConnectionValueForAuthProperty<typeof codyAuth>, path: string): Promise<T>;
};
//# sourceMappingURL=client.d.ts.map