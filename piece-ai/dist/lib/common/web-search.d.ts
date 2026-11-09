import { ToolSet } from 'ai';
import { ProviderOptions } from '@ai-sdk/provider-utils';
export declare function buildWebSearchOptionsProperty(getProviderAndModel: (propsValue: Record<string, unknown>) => {
    provider: string | undefined;
    model: string | undefined;
}, refreshers: string[], params?: {
    showIncludeSources?: boolean;
}): import("@agnocon/pieces-framework").DynamicProperties<false, undefined>;
export declare function buildWebSearchConfig(params: {
    provider: string;
    model?: string;
    webSearchEnabled: boolean;
    webSearchOptions: WebSearchOptions;
}): {
    tools: ToolSet | undefined;
    providerOptions: ProviderOptions | undefined;
};
type BaseWebSearchOptions = {
    maxUses?: number;
    includeSources?: boolean;
};
type UserLocationOptions = {
    userLocationCity?: string;
    userLocationRegion?: string;
    userLocationCountry?: string;
    userLocationTimezone?: string;
};
type AnthropicWebSearchOptions = BaseWebSearchOptions & UserLocationOptions & {
    allowedDomains?: {
        domain: string;
    }[];
    blockedDomains?: {
        domain: string;
    }[];
};
type OpenAIWebSearchOptions = BaseWebSearchOptions & UserLocationOptions & {
    searchContextSize?: 'low' | 'medium' | 'high';
};
export type WebSearchOptions = AnthropicWebSearchOptions | OpenAIWebSearchOptions;
export {};
//# sourceMappingURL=web-search.d.ts.map