import { AIProviderName } from '@agnocon/core-utils';
import * as z from 'zod/mini';
export declare enum AIProviderModelType {
    IMAGE = "image",
    TEXT = "text"
}
export declare const BaseAIProviderAuthConfig: z.ZodMiniObject<{
    apiKey: z.ZodMiniString<string>;
}, z.z.core.$strip>;
export type BaseAIProviderAuthConfig = z.infer<typeof BaseAIProviderAuthConfig>;
export declare const BedrockProviderAuthConfig: z.ZodMiniObject<{
    accessKeyId: z.ZodMiniString<string>;
    secretAccessKey: z.ZodMiniString<string>;
}, z.z.core.$strip>;
export type BedrockProviderAuthConfig = z.infer<typeof BedrockProviderAuthConfig>;
export declare const ProviderModelConfig: z.ZodMiniObject<{
    modelId: z.ZodMiniString<string>;
    modelName: z.ZodMiniString<string>;
    modelType: z.ZodMiniEnum<typeof AIProviderModelType>;
}, z.z.core.$strip>;
export type ProviderModelConfig = z.infer<typeof ProviderModelConfig>;
export declare const OpenAICompatibleProviderConfig: z.ZodMiniObject<{
    apiKeyHeader: z.ZodMiniString<string>;
    baseUrl: z.ZodMiniString<string>;
    models: z.ZodMiniArray<z.ZodMiniObject<{
        modelId: z.ZodMiniString<string>;
        modelName: z.ZodMiniString<string>;
        modelType: z.ZodMiniEnum<typeof AIProviderModelType>;
    }, z.z.core.$strip>>;
    defaultHeaders: z.ZodMiniOptional<z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniString<string>>>;
}, z.z.core.$strip>;
export type OpenAICompatibleProviderConfig = z.infer<typeof OpenAICompatibleProviderConfig>;
export declare const CloudflareGatewayProviderConfig: z.ZodMiniObject<{
    accountId: z.ZodMiniString<string>;
    gatewayId: z.ZodMiniString<string>;
    models: z.ZodMiniArray<z.ZodMiniObject<{
        modelId: z.ZodMiniString<string>;
        modelName: z.ZodMiniString<string>;
        modelType: z.ZodMiniEnum<typeof AIProviderModelType>;
    }, z.z.core.$strip>>;
    vertexProject: z.ZodMiniOptional<z.ZodMiniString<string>>;
    vertexRegion: z.ZodMiniOptional<z.ZodMiniString<string>>;
}, z.z.core.$strip>;
export type CloudflareGatewayProviderConfig = z.infer<typeof CloudflareGatewayProviderConfig>;
export declare const AzureProviderConfig: z.ZodMiniObject<{
    resourceName: z.ZodMiniString<string>;
    apiVersion: z.ZodMiniPipe<z.ZodMiniTransform<unknown, unknown>, z.ZodMiniOptional<z.ZodMiniString<string>>>;
}, z.z.core.$strip>;
export type AzureProviderConfig = z.infer<typeof AzureProviderConfig>;
export declare const BedrockProviderConfig: z.ZodMiniObject<{
    region: z.ZodMiniString<string>;
}, z.z.core.$strip>;
export type BedrockProviderConfig = z.infer<typeof BedrockProviderConfig>;
export declare const AIProviderAuthConfig: z.ZodMiniUnion<readonly [z.ZodMiniObject<{
    apiKey: z.ZodMiniString<string>;
}, z.z.core.$strip>, z.ZodMiniObject<{
    apiKey: z.ZodMiniString<string>;
}, z.z.core.$strip>, z.ZodMiniObject<{
    apiKey: z.ZodMiniString<string>;
}, z.z.core.$strip>, z.ZodMiniObject<{
    apiKey: z.ZodMiniString<string>;
}, z.z.core.$strip>, z.ZodMiniObject<{
    apiKey: z.ZodMiniString<string>;
}, z.z.core.$strip>, z.ZodMiniObject<{
    apiKey: z.ZodMiniString<string>;
}, z.z.core.$strip>, z.ZodMiniObject<{
    apiKey: z.ZodMiniString<string>;
}, z.z.core.$strip>, z.ZodMiniObject<{
    apiKey: z.ZodMiniString<string>;
    apiKeyHash: z.ZodMiniString<string>;
}, z.z.core.$strip>, z.ZodMiniObject<{
    accessKeyId: z.ZodMiniString<string>;
    secretAccessKey: z.ZodMiniString<string>;
}, z.z.core.$strip>, z.ZodMiniObject<{
    apiKey: z.ZodMiniString<string>;
}, z.z.core.$strip>]>;
export type AIProviderAuthConfig = z.infer<typeof AIProviderAuthConfig>;
export declare const AIProviderConfig: z.ZodMiniUnion<readonly [z.ZodMiniObject<{
    apiKeyHeader: z.ZodMiniString<string>;
    baseUrl: z.ZodMiniString<string>;
    models: z.ZodMiniArray<z.ZodMiniObject<{
        modelId: z.ZodMiniString<string>;
        modelName: z.ZodMiniString<string>;
        modelType: z.ZodMiniEnum<typeof AIProviderModelType>;
    }, z.z.core.$strip>>;
    defaultHeaders: z.ZodMiniOptional<z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniString<string>>>;
}, z.z.core.$strip>, z.ZodMiniObject<{
    accountId: z.ZodMiniString<string>;
    gatewayId: z.ZodMiniString<string>;
    models: z.ZodMiniArray<z.ZodMiniObject<{
        modelId: z.ZodMiniString<string>;
        modelName: z.ZodMiniString<string>;
        modelType: z.ZodMiniEnum<typeof AIProviderModelType>;
    }, z.z.core.$strip>>;
    vertexProject: z.ZodMiniOptional<z.ZodMiniString<string>>;
    vertexRegion: z.ZodMiniOptional<z.ZodMiniString<string>>;
}, z.z.core.$strip>, z.ZodMiniObject<{
    resourceName: z.ZodMiniString<string>;
    apiVersion: z.ZodMiniPipe<z.ZodMiniTransform<unknown, unknown>, z.ZodMiniOptional<z.ZodMiniString<string>>>;
}, z.z.core.$strip>, z.ZodMiniObject<{
    region: z.ZodMiniString<string>;
}, z.z.core.$strip>, z.ZodMiniObject<{}, z.z.core.$strip>, z.ZodMiniObject<{}, z.z.core.$strip>, z.ZodMiniObject<{}, z.z.core.$strip>, z.ZodMiniObject<{}, z.z.core.$strip>, z.ZodMiniObject<{}, z.z.core.$strip>, z.ZodMiniObject<{}, z.z.core.$strip>]>;
export type AIProviderConfig = z.infer<typeof AIProviderConfig>;
export declare const AIProviderModel: z.ZodMiniObject<{
    id: z.ZodMiniString<string>;
    name: z.ZodMiniString<string>;
    type: z.ZodMiniEnum<typeof AIProviderModelType>;
}, z.z.core.$strip>;
export type AIProviderModel = z.infer<typeof AIProviderModel>;
export declare const AIProviderWithoutSensitiveData: z.ZodMiniObject<{
    id: z.ZodMiniString<string>;
    name: z.ZodMiniString<string>;
    provider: z.ZodMiniEnum<typeof AIProviderName>;
    config: z.ZodMiniUnion<readonly [z.ZodMiniObject<{
        apiKeyHeader: z.ZodMiniString<string>;
        baseUrl: z.ZodMiniString<string>;
        models: z.ZodMiniArray<z.ZodMiniObject<{
            modelId: z.ZodMiniString<string>;
            modelName: z.ZodMiniString<string>;
            modelType: z.ZodMiniEnum<typeof AIProviderModelType>;
        }, z.z.core.$strip>>;
        defaultHeaders: z.ZodMiniOptional<z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniString<string>>>;
    }, z.z.core.$strip>, z.ZodMiniObject<{
        accountId: z.ZodMiniString<string>;
        gatewayId: z.ZodMiniString<string>;
        models: z.ZodMiniArray<z.ZodMiniObject<{
            modelId: z.ZodMiniString<string>;
            modelName: z.ZodMiniString<string>;
            modelType: z.ZodMiniEnum<typeof AIProviderModelType>;
        }, z.z.core.$strip>>;
        vertexProject: z.ZodMiniOptional<z.ZodMiniString<string>>;
        vertexRegion: z.ZodMiniOptional<z.ZodMiniString<string>>;
    }, z.z.core.$strip>, z.ZodMiniObject<{
        resourceName: z.ZodMiniString<string>;
        apiVersion: z.ZodMiniPipe<z.ZodMiniTransform<unknown, unknown>, z.ZodMiniOptional<z.ZodMiniString<string>>>;
    }, z.z.core.$strip>, z.ZodMiniObject<{
        region: z.ZodMiniString<string>;
    }, z.z.core.$strip>, z.ZodMiniObject<{}, z.z.core.$strip>, z.ZodMiniObject<{}, z.z.core.$strip>, z.ZodMiniObject<{}, z.z.core.$strip>, z.ZodMiniObject<{}, z.z.core.$strip>, z.ZodMiniObject<{}, z.z.core.$strip>, z.ZodMiniObject<{}, z.z.core.$strip>]>;
    enabledForChat: z.ZodMiniBoolean<boolean>;
}, z.z.core.$strip>;
export type AIProviderWithoutSensitiveData = z.infer<typeof AIProviderWithoutSensitiveData>;
export declare const GetProviderConfigResponse: z.ZodMiniObject<{
    provider: z.ZodMiniEnum<typeof AIProviderName>;
    config: z.ZodMiniUnion<readonly [z.ZodMiniObject<{
        apiKeyHeader: z.ZodMiniString<string>;
        baseUrl: z.ZodMiniString<string>;
        models: z.ZodMiniArray<z.ZodMiniObject<{
            modelId: z.ZodMiniString<string>;
            modelName: z.ZodMiniString<string>;
            modelType: z.ZodMiniEnum<typeof AIProviderModelType>;
        }, z.z.core.$strip>>;
        defaultHeaders: z.ZodMiniOptional<z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniString<string>>>;
    }, z.z.core.$strip>, z.ZodMiniObject<{
        accountId: z.ZodMiniString<string>;
        gatewayId: z.ZodMiniString<string>;
        models: z.ZodMiniArray<z.ZodMiniObject<{
            modelId: z.ZodMiniString<string>;
            modelName: z.ZodMiniString<string>;
            modelType: z.ZodMiniEnum<typeof AIProviderModelType>;
        }, z.z.core.$strip>>;
        vertexProject: z.ZodMiniOptional<z.ZodMiniString<string>>;
        vertexRegion: z.ZodMiniOptional<z.ZodMiniString<string>>;
    }, z.z.core.$strip>, z.ZodMiniObject<{
        resourceName: z.ZodMiniString<string>;
        apiVersion: z.ZodMiniPipe<z.ZodMiniTransform<unknown, unknown>, z.ZodMiniOptional<z.ZodMiniString<string>>>;
    }, z.z.core.$strip>, z.ZodMiniObject<{
        region: z.ZodMiniString<string>;
    }, z.z.core.$strip>, z.ZodMiniObject<{}, z.z.core.$strip>, z.ZodMiniObject<{}, z.z.core.$strip>, z.ZodMiniObject<{}, z.z.core.$strip>, z.ZodMiniObject<{}, z.z.core.$strip>, z.ZodMiniObject<{}, z.z.core.$strip>, z.ZodMiniObject<{}, z.z.core.$strip>]>;
    auth: z.ZodMiniUnion<readonly [z.ZodMiniObject<{
        apiKey: z.ZodMiniString<string>;
    }, z.z.core.$strip>, z.ZodMiniObject<{
        apiKey: z.ZodMiniString<string>;
    }, z.z.core.$strip>, z.ZodMiniObject<{
        apiKey: z.ZodMiniString<string>;
    }, z.z.core.$strip>, z.ZodMiniObject<{
        apiKey: z.ZodMiniString<string>;
    }, z.z.core.$strip>, z.ZodMiniObject<{
        apiKey: z.ZodMiniString<string>;
    }, z.z.core.$strip>, z.ZodMiniObject<{
        apiKey: z.ZodMiniString<string>;
    }, z.z.core.$strip>, z.ZodMiniObject<{
        apiKey: z.ZodMiniString<string>;
    }, z.z.core.$strip>, z.ZodMiniObject<{
        apiKey: z.ZodMiniString<string>;
        apiKeyHash: z.ZodMiniString<string>;
    }, z.z.core.$strip>, z.ZodMiniObject<{
        accessKeyId: z.ZodMiniString<string>;
        secretAccessKey: z.ZodMiniString<string>;
    }, z.z.core.$strip>, z.ZodMiniObject<{
        apiKey: z.ZodMiniString<string>;
    }, z.z.core.$strip>]>;
    platformId: z.ZodMiniString<string>;
}, z.z.core.$strip>;
export type GetProviderConfigResponse = z.infer<typeof GetProviderConfigResponse>;
export declare function splitCloudflareGatewayModelId(modelId: string): {
    provider: 'google-vertex-ai';
    publisher: string;
    model: string;
} | {
    provider: string;
    model: string;
    publisher: undefined;
} | {
    provider: undefined;
    model: string;
    publisher: undefined;
};
export declare function getEffectiveProviderAndModel({ provider, model, }: {
    provider: string | undefined;
    model: string | undefined;
}): {
    provider: string | undefined;
    model: string | undefined;
};
export declare const ALLOWED_CHAT_MODELS_BY_PROVIDER: Partial<Record<AIProviderName, readonly string[]>>;
declare function getCuratedChatModels({ provider }: {
    provider: AIProviderName;
}): {
    id: string;
    label: string;
}[] | undefined;
declare function isCuratedChatModelId({ modelId }: {
    modelId: string;
}): boolean;
declare function getMaxContextTokens({ provider }: {
    provider: AIProviderName | undefined;
}): number;
export declare const ACTIVEPIECES_CHAT_TIERS: readonly [{
    readonly id: "fast";
    readonly label: "Fast";
    readonly modelId: "anthropic/claude-haiku-4.5";
    readonly thinkingBudget: 5000;
    readonly creditWeight: 2;
}, {
    readonly id: "smart";
    readonly label: "Expert";
    readonly modelId: "anthropic/claude-sonnet-4.6";
    readonly thinkingBudget: 10000;
    readonly creditWeight: 10;
}, {
    readonly id: "premium";
    readonly label: "Heavy";
    readonly modelId: "anthropic/claude-opus-4.8";
    readonly thinkingBudget: 20000;
    readonly creditWeight: 20;
}];
export declare const DEFAULT_CHAT_TIER_ID: "smart";
export type ActivepiecesChatTier = typeof ACTIVEPIECES_CHAT_TIERS[number];
export declare const AI_PROVIDER_CAPABILITIES: Record<AIProviderName, AIProviderCapabilities>;
export declare const aiProviderUtils: {
    getMaxContextTokens: typeof getMaxContextTokens;
    getCuratedChatModels: typeof getCuratedChatModels;
    isCuratedChatModelId: typeof isCuratedChatModelId;
};
export type AIWebSearchMode = 'native' | 'plugin';
export type AIProviderCapabilities = {
    chatModels?: readonly string[] | undefined;
    maxContextTokens: number;
    defaultEmbeddingModel: string | undefined;
    supportsEmbedding: boolean;
    supportsImageGeneration: boolean;
    webSearch: AIWebSearchMode | undefined;
};
export {};
//# sourceMappingURL=ai-providers.d.ts.map