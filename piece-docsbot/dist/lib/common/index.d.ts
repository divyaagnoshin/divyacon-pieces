import { askQuestionRequestParams, Bot, createBotRequestParams, createSourceRequestParams, listBotsParams, PresignedUpdateUrlResponse, Team, createSourceUrlParams as teamAndBotUrlParams, uploadSourceFileRequestParams, uploadToCloudStorageParams } from './types';
export declare const docsbotAuth: import("@agnocon/pieces-framework").SecretTextProperty<true>;
export declare const docsbotCommon: {
    baseUrl: string;
    endpoints: {
        askQuestion: ({ teamId, botId }: teamAndBotUrlParams) => string;
        createSource: ({ teamId, botId }: teamAndBotUrlParams) => string;
        createBot: (teamId: string) => string;
        createPresignedFileUploadURL: ({ teamId, botId }: teamAndBotUrlParams) => string;
        listTeams: () => string;
        listBots: (teamId: string) => string;
    };
    askQuestionProperties: () => {
        teamId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
        botId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        question: import("@agnocon/pieces-framework").LongTextProperty<true>;
        metadata: import("@agnocon/pieces-framework").ObjectProperty<false>;
        context_items: import("@agnocon/pieces-framework").NumberProperty<false>;
        human_escalation: import("@agnocon/pieces-framework").CheckboxProperty<false>;
        followup_rating: import("@agnocon/pieces-framework").CheckboxProperty<false>;
        document_retriever: import("@agnocon/pieces-framework").CheckboxProperty<false>;
        full_source: import("@agnocon/pieces-framework").CheckboxProperty<false>;
        autocut: import("@agnocon/pieces-framework").NumberProperty<false>;
        testing: import("@agnocon/pieces-framework").CheckboxProperty<false>;
        image_urls: import("@agnocon/pieces-framework").ArrayProperty<false>;
        model: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        default_language: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        reasoning_effort: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    };
    createSourceProperties: () => {
        teamId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
        botId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
        sourceProperties: import("@agnocon/pieces-framework").DynamicProperties<true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    };
    uploadSourceFileProperties: () => {
        teamId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
        botId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        file: import("@agnocon/pieces-framework").FileProperty<true, false>;
    };
    createBotProperties: () => {
        teamId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
        name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        description: import("@agnocon/pieces-framework").LongTextProperty<true>;
        privacy: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
        language: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
        model: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
        embeddingModel: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
        copyFrom: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    };
    findBotProperties: () => {
        teamId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
        name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    };
    askQuestionSchema: {
        teamId: import("zod").ZodString;
        botId: import("zod").ZodString;
        question: import("zod").ZodString;
        metadata: import("zod").ZodOptional<import("zod").ZodObject<{}, import("zod/v4/core").$strip>>;
        context_items: import("zod").ZodOptional<import("zod").ZodNumber>;
        human_escalation: import("zod").ZodOptional<import("zod").ZodBoolean>;
        followup_rating: import("zod").ZodOptional<import("zod").ZodBoolean>;
        document_retriever: import("zod").ZodOptional<import("zod").ZodBoolean>;
        full_source: import("zod").ZodOptional<import("zod").ZodBoolean>;
        autocut: import("zod").ZodOptional<import("zod").ZodNumber>;
        testing: import("zod").ZodOptional<import("zod").ZodBoolean>;
        image_urls: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString>>;
        model: import("zod").ZodOptional<import("zod").ZodString>;
        default_language: import("zod").ZodOptional<import("zod").ZodString>;
        reasoning_effort: import("zod").ZodOptional<import("zod").ZodEnum<{
            minimal: "minimal";
            low: "low";
            medium: "medium";
            high: "high";
        }>>;
    };
    createSourceSchema: import("zod").ZodObject<{
        type: import("zod").ZodEnum<{
            url: "url";
            document: "document";
            sitemap: "sitemap";
            wp: "wp";
            urls: "urls";
            csv: "csv";
            rss: "rss";
            qa: "qa";
            youtube: "youtube";
        }>;
        title: import("zod").ZodOptional<import("zod").ZodString>;
        url: import("zod").ZodOptional<import("zod").ZodString>;
        file: import("zod").ZodOptional<import("zod").ZodString>;
        faqs: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
            question: import("zod").ZodString;
            answer: import("zod").ZodString;
        }, import("zod/v4/core").$strip>>>;
        scheduleInterval: import("zod").ZodOptional<import("zod").ZodEnum<{
            daily: "daily";
            weekly: "weekly";
            monthly: "monthly";
            none: "none";
        }>>;
    }, import("zod/v4/core").$strip>;
    uploadSourceFileSchema: {
        teamId: import("zod").ZodString;
        botId: import("zod").ZodString;
        file: import("zod").ZodObject<{
            filename: import("zod").ZodString;
            data: import("zod").ZodCustom<Buffer, Buffer>;
            extension: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>;
    };
    createBotSchema: {
        teamId: import("zod").ZodString;
        name: import("zod").ZodString;
        description: import("zod").ZodString;
        privacy: import("zod").ZodEnum<{
            public: "public";
            private: "private";
        }>;
        language: import("zod").ZodEnum<{
            en: "en";
            jp: "jp";
        }>;
        model: import("zod").ZodOptional<import("zod").ZodString>;
        embeddingModel: import("zod").ZodOptional<import("zod").ZodEnum<{
            "text-embedding-ada-002": "text-embedding-ada-002";
            "text-embedding-3-large": "text-embedding-3-large";
            "text-embedding-3-small": "text-embedding-3-small";
            "embed-multilingual-v3.0": "embed-multilingual-v3.0";
            "embed-v4.0": "embed-v4.0";
        }>>;
        copyFrom: import("zod").ZodOptional<import("zod").ZodString>;
    };
    findBotSchema: {
        teamId: import("zod").ZodString;
        name: import("zod").ZodString;
    };
    askQuestion: ({ apiKey, teamId, botId, ...chatParams }: askQuestionRequestParams) => Promise<any>;
    createSource: ({ apiKey, teamId, botId, ...sourceParams }: createSourceRequestParams) => Promise<any>;
    createBot: ({ apiKey, teamId, ...botParams }: createBotRequestParams) => Promise<any>;
    createPresignedFileUploadURL: ({ apiKey, teamId, botId, fileName, }: uploadSourceFileRequestParams) => Promise<PresignedUpdateUrlResponse>;
    uploadFileToCloudStorage: ({ uploadUrl, file, }: uploadToCloudStorageParams) => Promise<any>;
    listBots: ({ apiKey, teamId }: listBotsParams) => Promise<Bot[]>;
    listTeams: (apiKey: string) => Promise<Team[]>;
};
//# sourceMappingURL=index.d.ts.map