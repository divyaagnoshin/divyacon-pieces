import { ListKnowledgeItemsResponse, AddFaqItemParams, CreateFaqParams, ListChatbotsResponse, CreateReplyParams } from './types';
export declare const API_BASE_URL = "https://api.aidbase.ai/v1";
declare function addVideo(apiKey: string, videoUrl: string): Promise<unknown>;
declare function addWebsite(apiKey: string, websiteUrl: string): Promise<unknown>;
declare function listKnowledgeItems(apiKey: string): Promise<ListKnowledgeItemsResponse>;
declare function addFaqItem(apiKey: string, faqId: string, params: AddFaqItemParams): Promise<unknown>;
declare function createFaq(apiKey: string, params: CreateFaqParams): Promise<unknown>;
declare function listChatbots(apiKey: string): Promise<ListChatbotsResponse>;
declare function createChatbotReply(apiKey: string, chatbotId: string, params: CreateReplyParams): Promise<unknown>;
declare function startTraining(apiKey: string, knowledgeId: string): Promise<unknown>;
export declare const aidbaseClient: {
    addVideo: typeof addVideo;
    addWebsite: typeof addWebsite;
    listKnowledgeItems: typeof listKnowledgeItems;
    addFaqItem: typeof addFaqItem;
    createFaq: typeof createFaq;
    listChatbots: typeof listChatbots;
    createChatbotReply: typeof createChatbotReply;
    startTraining: typeof startTraining;
};
export {};
//# sourceMappingURL=client.d.ts.map