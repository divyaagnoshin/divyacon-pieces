import { EmbeddingModel, ImageModel, LanguageModel } from 'ai';
import { ProviderOptions } from '@ai-sdk/provider-utils';
import { AIProviderName } from '@agnocon/pieces-framework';
export declare function createAIModel(params: CreateAIModelParams<false>): Promise<LanguageModel>;
export declare function createAIModel(params: CreateAIModelParams<true>): Promise<ImageModel>;
export declare const anthropicSearchTool: (args?: Parameters<import("@ai-sdk/provider-utils").ProviderToolFactoryWithOutputSchema<{
    query: string;
}, {
    type: "web_search_result";
    url: string;
    title: string | null;
    pageAge: string | null;
    encryptedContent: string;
}[], {
    maxUses?: number;
    allowedDomains?: string[];
    blockedDomains?: string[];
    userLocation?: {
        type: "approximate";
        city?: string;
        region?: string;
        country?: string;
        timezone?: string;
    };
}>>[0]) => import("ai").Tool<{
    query: string;
}, {
    type: "web_search_result";
    url: string;
    title: string | null;
    pageAge: string | null;
    encryptedContent: string;
}[]>;
export declare const openaiSearchTool: import("@ai-sdk/provider-utils").ProviderToolFactoryWithOutputSchema<{}, {
    action?: {
        type: "search";
        query?: string;
    } | {
        type: "openPage";
        url?: string | null;
    } | {
        type: "findInPage";
        url?: string | null;
        pattern?: string | null;
    };
}, {
    searchContextSize?: "low" | "medium" | "high";
    userLocation?: {
        type: "approximate";
        country?: string;
        city?: string;
        region?: string;
        timezone?: string;
    };
}>;
export declare const googleSearchTool: import("@ai-sdk/provider-utils").ProviderToolFactory<{}, {
    [x: string]: unknown;
    searchTypes?: {
        webSearch?: Record<string, never> | undefined;
        imageSearch?: Record<string, never> | undefined;
    } | undefined;
    timeRangeFilter?: {
        startTime: string;
        endTime: string;
    } | undefined;
}>;
export declare function createEmbeddingModel({ provider, engineToken, apiUrl, }: CreateEmbeddingModelParams): Promise<CreateEmbeddingModelResult>;
type CreateAIModelParams<IsImage extends boolean = false> = {
    provider: AIProviderName;
    modelId: string;
    engineToken: string;
    projectId: string;
    flowId: string;
    runId: string;
    apiUrl: string;
    openaiResponsesModel?: boolean;
    isImage?: IsImage;
};
type CreateEmbeddingModelParams = {
    provider: AIProviderName;
    engineToken: string;
    apiUrl: string;
};
type CreateEmbeddingModelResult = {
    model: EmbeddingModel;
    embeddingModelId: string;
    providerOptions: ProviderOptions;
};
export {};
//# sourceMappingURL=ai-sdk.d.ts.map