import * as z from 'zod/mini';
export declare const CreateChatbotDto: z.ZodMiniObject<{
    chatbotName: z.ZodMiniString<string>;
    sourceText: z.ZodMiniOptional<z.ZodMiniString<string>>;
    urlsToScrape: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniString<string>>>;
    products: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniObject<{
        id: z.ZodMiniString<string>;
        information: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnknown>;
    }, z.z.core.$strip>>>;
    qAndAs: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniObject<{
        question: z.ZodMiniString<string>;
        answer: z.ZodMiniString<string>;
    }, z.z.core.$strip>>>;
    customBackend: z.ZodMiniOptional<z.ZodMiniString<string>>;
    bearer: z.ZodMiniOptional<z.ZodMiniString<string>>;
    model: z.ZodMiniDefault<z.ZodMiniEnum<{
        "custom-data-upload": "custom-data-upload";
        "medical-chat-human": "medical-chat-human";
        "medical-chat-vet": "medical-chat-vet";
        "custom-model": "custom-model";
    }>>;
}, z.z.core.$strip>;
export declare const SendMessageDto: z.ZodMiniObject<{
    messages: z.ZodMiniArray<z.ZodMiniObject<{
        role: z.ZodMiniEnum<{
            user: "user";
            assistant: "assistant";
        }>;
        content: z.ZodMiniString<string>;
        files: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniObject<{
            name: z.ZodMiniString<string>;
            type: z.ZodMiniEnum<{
                "application/pdf": "application/pdf";
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document": "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
                "text/html": "text/html";
                "text/plain": "text/plain";
                "image/png": "image/png";
                "image/jpg": "image/jpg";
                "image/jpeg": "image/jpeg";
                "image/webp": "image/webp";
            }>;
            url: z.ZodMiniString<string>;
            content: z.ZodMiniOptional<z.ZodMiniString<string>>;
        }, z.z.core.$strip>>>;
    }, z.z.core.$strip>>;
    chatbotId: z.ZodMiniString<string>;
    includeReasoning: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
    baseModel: z.ZodMiniOptional<z.ZodMiniEnum<{
        "gpt-4o-mini": "gpt-4o-mini";
        "gpt-4o": "gpt-4o";
        "gpt-4": "gpt-4";
        "gpt-4.1-nano": "gpt-4.1-nano";
        "gpt-4.1-mini": "gpt-4.1-mini";
        "gpt-4.1": "gpt-4.1";
        "gpt-5-nano": "gpt-5-nano";
        "gpt-5-mini": "gpt-5-mini";
        "gpt-5": "gpt-5";
        "gpt-o1": "gpt-o1";
        "gpt-o3-mini": "gpt-o3-mini";
        "gpt-o3": "gpt-o3";
        "gpt-o4-mini": "gpt-o4-mini";
        "claude-3-5-sonnet": "claude-3-5-sonnet";
        "claude-3-7-sonnet": "claude-3-7-sonnet";
        "claude-4-sonnet": "claude-4-sonnet";
        "claude-4-5-sonnet": "claude-4-5-sonnet";
        "claude-3-5-haiku": "claude-3-5-haiku";
        "claude-3-haiku": "claude-3-haiku";
        "claude-4-opus": "claude-4-opus";
        "claude-4.1-opus": "claude-4.1-opus";
        "gemini-2.5-flash": "gemini-2.5-flash";
        "gemini-2.0-flash": "gemini-2.0-flash";
        "gemini-1.5-flash": "gemini-1.5-flash";
        "gemini-2.5-pro": "gemini-2.5-pro";
        "deepseek-r1": "deepseek-r1";
    }>>;
    basePrompt: z.ZodMiniOptional<z.ZodMiniString<string>>;
    stream: z.ZodMiniDefault<z.ZodMiniBoolean<boolean>>;
    openAIFormat: z.ZodMiniDefault<z.ZodMiniBoolean<boolean>>;
    appendMessages: z.ZodMiniDefault<z.ZodMiniBoolean<boolean>>;
    conversationId: z.ZodMiniOptional<z.ZodMiniString<string>>;
}, z.z.core.$strip>;
export declare const RetrainOptions: z.ZodMiniObject<{
    chatbotId: z.ZodMiniString<string>;
    sourceText: z.ZodMiniOptional<z.ZodMiniString<string>>;
    urlsToScrape: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniString<string>>>;
    options: z.ZodMiniOptional<z.ZodMiniObject<{
        Cookies: z.ZodMiniOptional<z.ZodMiniString<string>>;
        extractMainContent: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
        includeOnlyTags: z.ZodMiniOptional<z.ZodMiniString<string>>;
        excludeTags: z.ZodMiniOptional<z.ZodMiniString<string>>;
    }, z.z.core.$strip>>;
    products: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniObject<{
        id: z.ZodMiniString<string>;
        information: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnknown>;
    }, z.z.core.$strip>>>;
    qAndAs: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniObject<{
        question: z.ZodMiniString<string>;
        answer: z.ZodMiniString<string>;
    }, z.z.core.$strip>>>;
    deletes: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniObject<{
        type: z.ZodMiniEnum<{
            file: "file";
            website: "website";
            "q&a": "q&a";
            product: "product";
            text: "text";
        }>;
        url: z.ZodMiniOptional<z.ZodMiniString<string>>;
    }, z.z.core.$strip>>>;
}, z.z.core.$strip>;
export declare const Chatbot: z.ZodMiniObject<{
    chatbotId: z.ZodMiniString<string>;
    consumedCharacters: z.ZodMiniNumber<number>;
    remainingCharacters: z.ZodMiniNumber<number>;
    dataSources: z.ZodMiniArray<z.ZodMiniObject<{
        name: z.ZodMiniString<string>;
        characters: z.ZodMiniNumber<number>;
        type: z.ZodMiniString<string>;
    }, z.z.core.$strip>>;
    status: z.ZodMiniString<string>;
}, z.z.core.$strip>;
export declare const Message: z.ZodMiniObject<{
    response: z.ZodMiniString<string>;
    conversationId: z.ZodMiniOptional<z.ZodMiniString<string>>;
}, z.z.core.$strip>;
export declare const RetrainJob: z.ZodMiniObject<{
    chatbotId: z.ZodMiniString<string>;
    consumedCharacters: z.ZodMiniNumber<number>;
    remainingCharacters: z.ZodMiniNumber<number>;
    dataSources: z.ZodMiniArray<z.ZodMiniObject<{
        name: z.ZodMiniString<string>;
        characters: z.ZodMiniNumber<number>;
        type: z.ZodMiniString<string>;
    }, z.z.core.$strip>>;
    status: z.ZodMiniString<string>;
}, z.z.core.$strip>;
export declare const RetrainJobStatus: z.ZodMiniObject<{
    id: z.ZodMiniString<string>;
    status: z.ZodMiniEnum<{
        pending: "pending";
        running: "running";
        completed: "completed";
        failed: "failed";
    }>;
    progress: z.ZodMiniOptional<z.ZodMiniNumber<number>>;
    error: z.ZodMiniOptional<z.ZodMiniString<string>>;
}, z.z.core.$strip>;
export declare const FileMeta: z.ZodMiniObject<{
    status: z.ZodMiniString<string>;
    url: z.ZodMiniString<string>;
}, z.z.core.$strip>;
export type CreateChatbotDto = z.infer<typeof CreateChatbotDto>;
export type SendMessageDto = z.infer<typeof SendMessageDto>;
export type RetrainOptions = z.infer<typeof RetrainOptions>;
export type Chatbot = z.infer<typeof Chatbot>;
export type Message = z.infer<typeof Message>;
export type RetrainJob = z.infer<typeof RetrainJob>;
export type RetrainJobStatus = z.infer<typeof RetrainJobStatus>;
export type FileMeta = z.infer<typeof FileMeta>;
export declare const UpdateChatbotSettingsDto: z.ZodMiniObject<{
    chatbotId: z.ZodMiniString<string>;
    chatbotName: z.ZodMiniOptional<z.ZodMiniString<string>>;
    basePrompt: z.ZodMiniOptional<z.ZodMiniString<string>>;
    initialMessages: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniString<string>>>;
    suggestedMessages: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniString<string>>>;
    visibility: z.ZodMiniOptional<z.ZodMiniEnum<{
        private: "private";
        public: "public";
    }>>;
    onlyAllowOnAddedDomains: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
    domains: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniString<string>>>;
    rateLimitPoints: z.ZodMiniOptional<z.ZodMiniNumber<number>>;
    rateLimitTimeframe: z.ZodMiniOptional<z.ZodMiniNumber<number>>;
    rateLimitMessage: z.ZodMiniOptional<z.ZodMiniString<string>>;
    baseModel: z.ZodMiniOptional<z.ZodMiniEnum<{
        "gpt-4o-mini": "gpt-4o-mini";
        "gpt-4o": "gpt-4o";
        "gpt-4": "gpt-4";
        "gpt-4.1-nano": "gpt-4.1-nano";
        "gpt-4.1-mini": "gpt-4.1-mini";
        "gpt-4.1": "gpt-4.1";
        "gpt-5-nano": "gpt-5-nano";
        "gpt-5-mini": "gpt-5-mini";
        "gpt-5": "gpt-5";
        "gpt-o1": "gpt-o1";
        "gpt-o3-mini": "gpt-o3-mini";
        "gpt-o3": "gpt-o3";
        "gpt-o4-mini": "gpt-o4-mini";
        "claude-3-5-sonnet": "claude-3-5-sonnet";
        "claude-3-7-sonnet": "claude-3-7-sonnet";
        "claude-4-sonnet": "claude-4-sonnet";
        "claude-4-5-sonnet": "claude-4-5-sonnet";
        "claude-3-5-haiku": "claude-3-5-haiku";
        "claude-3-haiku": "claude-3-haiku";
        "claude-4-opus": "claude-4-opus";
        "claude-4.1-opus": "claude-4.1-opus";
        "gemini-2.5-flash": "gemini-2.5-flash";
        "gemini-2.0-flash": "gemini-2.0-flash";
        "gemini-1.5-flash": "gemini-1.5-flash";
        "gemini-2.5-pro": "gemini-2.5-pro";
        "deepseek-r1": "deepseek-r1";
    }>>;
    temperature: z.ZodMiniOptional<z.ZodMiniNumber<number>>;
    storeChat: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
    trackIpAddress: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
    showCalendar: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
    calendarUrl: z.ZodMiniOptional<z.ZodMiniString<string>>;
    calendarMessage: z.ZodMiniOptional<z.ZodMiniString<string>>;
    enableBouncingAnimation: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
    ignoreDataSource: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
    customBackend: z.ZodMiniOptional<z.ZodMiniString<string>>;
    bearer: z.ZodMiniOptional<z.ZodMiniString<string>>;
}, z.z.core.$strip>;
export type UpdateChatbotSettingsDto = z.infer<typeof UpdateChatbotSettingsDto>;
export declare const chatDataAuth: import("@agnocon/pieces-framework").SecretTextProperty<true>;
//# sourceMappingURL=types.d.ts.map