import { CreateChatbotDto, SendMessageDto, RetrainOptions, Chatbot, Message, RetrainJob, FileMeta, UpdateChatbotSettingsDto } from './types';
export declare class ChatDataClient {
    private baseURL;
    private apiKey;
    constructor(apiKey?: string);
    private getHeaders;
    private handleError;
    createChatbot(payload: CreateChatbotDto): Promise<Chatbot>;
    deleteChatbot(chatbotId: string): Promise<{
        status: string;
    }>;
    sendMessage(payload: SendMessageDto): Promise<Message>;
    updateChatbotSettings(payload: UpdateChatbotSettingsDto): Promise<{
        status: string;
    }>;
    retrainChatbot(payload: RetrainOptions): Promise<RetrainJob>;
    uploadFile(chatbotId: string, file: string | Buffer, meta: {
        filename: string;
        contentType: string;
    }): Promise<FileMeta>;
    listChatbots(): Promise<Array<{
        id: string;
        name: string;
    }>>;
    listConversations(chatbotId: string): Promise<Array<{
        id: string;
        title: string;
        lastMessage?: string;
    }>>;
}
//# sourceMappingURL=client.d.ts.map