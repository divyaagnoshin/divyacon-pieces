"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aiProviderUtils = exports.AI_PROVIDER_CAPABILITIES = exports.DEFAULT_CHAT_TIER_ID = exports.ACTIVEPIECES_CHAT_TIERS = exports.ALLOWED_CHAT_MODELS_BY_PROVIDER = exports.GetProviderConfigResponse = exports.AIProviderWithoutSensitiveData = exports.AIProviderModel = exports.AIProviderConfig = exports.AIProviderAuthConfig = exports.BedrockProviderConfig = exports.AzureProviderConfig = exports.CloudflareGatewayProviderConfig = exports.OpenAICompatibleProviderConfig = exports.ProviderModelConfig = exports.BedrockProviderAuthConfig = exports.BaseAIProviderAuthConfig = exports.AIProviderModelType = void 0;
exports.splitCloudflareGatewayModelId = splitCloudflareGatewayModelId;
exports.getEffectiveProviderAndModel = getEffectiveProviderAndModel;
const tslib_1 = require("tslib");
const core_utils_1 = require("@agnocon/core-utils");
const z = tslib_1.__importStar(require("zod/mini"));
var AIProviderModelType;
(function (AIProviderModelType) {
    AIProviderModelType["IMAGE"] = "image";
    AIProviderModelType["TEXT"] = "text";
})(AIProviderModelType || (exports.AIProviderModelType = AIProviderModelType = {}));
exports.BaseAIProviderAuthConfig = z.object({
    apiKey: z.string(),
});
const AnthropicProviderAuthConfig = exports.BaseAIProviderAuthConfig;
const ActivePiecesProviderAuthConfig = z.object({
    apiKey: z.string(),
    apiKeyHash: z.string(),
});
const OpenAICompatibleProviderAuthConfig = exports.BaseAIProviderAuthConfig;
const CloudflareGatewayProviderAuthConfig = exports.BaseAIProviderAuthConfig;
const AzureProviderAuthConfig = exports.BaseAIProviderAuthConfig;
const GoogleProviderAuthConfig = exports.BaseAIProviderAuthConfig;
const OpenAIProviderAuthConfig = exports.BaseAIProviderAuthConfig;
const OpenRouterProviderAuthConfig = exports.BaseAIProviderAuthConfig;
const MistralProviderAuthConfig = exports.BaseAIProviderAuthConfig;
exports.BedrockProviderAuthConfig = z.object({
    accessKeyId: z.string().check(z.minLength(1)),
    secretAccessKey: z.string().check(z.minLength(1)),
});
const AnthropicProviderConfig = z.object({});
const ActivePiecesProviderConfig = z.object({});
const GoogleProviderConfig = z.object({});
const OpenAIProviderConfig = z.object({});
const OpenRouterProviderConfig = z.object({});
const MistralProviderConfig = z.object({});
exports.ProviderModelConfig = z.object({
    modelId: z.string(),
    modelName: z.string(),
    modelType: z.enum(AIProviderModelType),
});
exports.OpenAICompatibleProviderConfig = z.object({
    apiKeyHeader: z.string(),
    baseUrl: z.string(),
    models: z.array(exports.ProviderModelConfig),
    defaultHeaders: z.optional(z.record(z.string(), z.string())),
});
exports.CloudflareGatewayProviderConfig = z.object({
    accountId: z.string(),
    gatewayId: z.string(),
    models: z.array(exports.ProviderModelConfig),
    vertexProject: z.optional(z.string()),
    vertexRegion: z.optional(z.string()),
});
exports.AzureProviderConfig = z.object({
    resourceName: z.string(),
    apiVersion: z.pipe(z.transform((v) => (typeof v === 'string' && v.trim().length === 0 ? undefined : v)), z.optional(z.string())),
});
exports.BedrockProviderConfig = z.object({
    region: z.string().check(z.minLength(1)),
});
exports.AIProviderAuthConfig = z.union([
    AnthropicProviderAuthConfig,
    AzureProviderAuthConfig,
    GoogleProviderAuthConfig,
    OpenAIProviderAuthConfig,
    OpenRouterProviderAuthConfig,
    CloudflareGatewayProviderAuthConfig,
    OpenAICompatibleProviderAuthConfig,
    ActivePiecesProviderAuthConfig,
    exports.BedrockProviderAuthConfig,
    MistralProviderAuthConfig,
]);
// Order matters, put schemas with required fields first, empty ones last. This is to avoid empty objects matching any object.
exports.AIProviderConfig = z.union([
    exports.OpenAICompatibleProviderConfig,
    exports.CloudflareGatewayProviderConfig,
    exports.AzureProviderConfig,
    exports.BedrockProviderConfig,
    AnthropicProviderConfig,
    GoogleProviderConfig,
    OpenAIProviderConfig,
    OpenRouterProviderConfig,
    ActivePiecesProviderConfig,
    MistralProviderConfig,
]);
exports.AIProviderModel = z.object({
    id: z.string(),
    name: z.string(),
    type: z.enum(AIProviderModelType),
});
exports.AIProviderWithoutSensitiveData = z.object({
    id: z.string(),
    name: z.string(),
    provider: z.enum(core_utils_1.AIProviderName),
    config: exports.AIProviderConfig,
    enabledForChat: z.boolean(),
});
exports.GetProviderConfigResponse = z.object({
    provider: z.enum(core_utils_1.AIProviderName),
    config: exports.AIProviderConfig,
    auth: exports.AIProviderAuthConfig,
    platformId: z.string(),
});
function splitCloudflareGatewayModelId(modelId) {
    const slashIndex = modelId.indexOf('/');
    if (slashIndex === -1) {
        return {
            provider: undefined,
            model: modelId,
            publisher: undefined,
        };
    }
    const provider = modelId.substring(0, slashIndex).trim().toLowerCase();
    const rest = modelId.substring(slashIndex + 1);
    if (provider === 'google-vertex-ai') {
        const secondSlashIndex = rest.indexOf('/');
        if (secondSlashIndex === -1) {
            return {
                provider: undefined,
                model: modelId,
                publisher: undefined,
            };
        }
        return {
            provider: 'google-vertex-ai',
            publisher: rest.substring(0, secondSlashIndex),
            model: rest.substring(secondSlashIndex + 1),
        };
    }
    return {
        provider,
        model: rest,
        publisher: undefined,
    };
}
function getEffectiveProviderAndModel({ provider, model, }) {
    var _a;
    if (provider !== core_utils_1.AIProviderName.CLOUDFLARE_GATEWAY || !model) {
        return { provider, model };
    }
    const split = splitCloudflareGatewayModelId(model);
    const gatewaySubmodelPrefix = ((_a = split.provider) !== null && _a !== void 0 ? _a : '').trim().toLowerCase();
    const mapped = CF_GATEWAY_SUBMODEL_TO_PROVIDER[gatewaySubmodelPrefix];
    if (!mapped) {
        return { provider, model };
    }
    return { provider: mapped, model: split.model };
}
const CF_GATEWAY_SUBMODEL_TO_PROVIDER = {
    openai: core_utils_1.AIProviderName.OPENAI,
    anthropic: core_utils_1.AIProviderName.ANTHROPIC,
    'google-ai-studio': core_utils_1.AIProviderName.GOOGLE,
    'google-vertex-ai': core_utils_1.AIProviderName.GOOGLE,
};
const OPENAI_CHAT_MODELS = ['gpt-5.5', 'gpt-5.4-mini', 'gpt-5.4-nano', 'gpt-4.1', 'gpt-4.1-mini'];
const ANTHROPIC_CHAT_MODELS = ['claude-sonnet-4-6', 'claude-opus-4-7', 'claude-haiku-4-5'];
const ANTHROPIC_OPENROUTER_CHAT_MODELS = ['claude-sonnet-4.6', 'claude-opus-4.7', 'claude-haiku-4.5'];
const GOOGLE_CHAT_MODELS = ['gemini-2.5-pro', 'gemini-2.5-flash', 'gemini-3.1-pro-preview', 'gemini-3-flash-preview'];
const X_AI_OPENROUTER_CHAT_MODELS = ['grok-4.20', 'grok-4.1-fast'];
exports.ALLOWED_CHAT_MODELS_BY_PROVIDER = {
    [core_utils_1.AIProviderName.OPENAI]: OPENAI_CHAT_MODELS,
    [core_utils_1.AIProviderName.ANTHROPIC]: ANTHROPIC_CHAT_MODELS,
    [core_utils_1.AIProviderName.GOOGLE]: GOOGLE_CHAT_MODELS,
    [core_utils_1.AIProviderName.ACTIVEPIECES]: [
        ...ANTHROPIC_OPENROUTER_CHAT_MODELS.map((m) => `${core_utils_1.AIProviderName.ANTHROPIC}/${m}`),
        ...OPENAI_CHAT_MODELS.map((m) => `${core_utils_1.AIProviderName.OPENAI}/${m}`),
        ...GOOGLE_CHAT_MODELS.map((m) => `${core_utils_1.AIProviderName.GOOGLE}/${m}`),
        ...X_AI_OPENROUTER_CHAT_MODELS.map((m) => `x-ai/${m}`),
    ],
};
const CHAT_MODEL_LABELS = {
    'gpt-5.5': 'GPT-5.5',
    'gpt-5.4-mini': 'GPT-5.4 mini',
    'gpt-5.4-nano': 'GPT-5.4 nano',
    'gpt-4.1': 'GPT-4.1',
    'gpt-4.1-mini': 'GPT-4.1 mini',
    'claude-sonnet-4-6': 'Claude Sonnet 4.6',
    'claude-opus-4-7': 'Claude Opus 4.7',
    'claude-haiku-4-5': 'Claude Haiku 4.5',
    'gemini-2.5-pro': 'Gemini 2.5 Pro',
    'gemini-2.5-flash': 'Gemini 2.5 Flash',
    'gemini-3.1-pro-preview': 'Gemini 3.1 Pro Preview',
    'gemini-3-flash-preview': 'Gemini 3 Flash Preview',
};
function getCuratedChatModels({ provider }) {
    const curatedIds = provider === core_utils_1.AIProviderName.ACTIVEPIECES ? undefined : exports.ALLOWED_CHAT_MODELS_BY_PROVIDER[provider];
    if ((0, core_utils_1.isNil)(curatedIds) || curatedIds.length === 0) {
        return undefined;
    }
    return curatedIds.map((id) => { var _a; return ({ id, label: (_a = CHAT_MODEL_LABELS[id]) !== null && _a !== void 0 ? _a : id }); });
}
function isCuratedChatModelId({ modelId }) {
    if (exports.ACTIVEPIECES_CHAT_TIERS.some((tier) => tier.id === modelId)) {
        return true;
    }
    return Object.values(exports.ALLOWED_CHAT_MODELS_BY_PROVIDER).some((curatedIds) => curatedIds.includes(modelId));
}
const DEFAULT_MAX_CONTEXT_TOKENS = 128000;
const PROVIDER_MAX_CONTEXT_TOKENS = {
    [core_utils_1.AIProviderName.OPENAI]: 128000,
    [core_utils_1.AIProviderName.ANTHROPIC]: 200000,
    [core_utils_1.AIProviderName.GOOGLE]: 1048576,
    [core_utils_1.AIProviderName.BEDROCK]: 200000,
    [core_utils_1.AIProviderName.AZURE]: 128000,
    [core_utils_1.AIProviderName.OPENROUTER]: 128000,
    [core_utils_1.AIProviderName.ACTIVEPIECES]: 200000,
    [core_utils_1.AIProviderName.MISTRAL]: 128000,
};
function getMaxContextTokens({ provider }) {
    var _a;
    if (!provider)
        return DEFAULT_MAX_CONTEXT_TOKENS;
    return (_a = PROVIDER_MAX_CONTEXT_TOKENS[provider]) !== null && _a !== void 0 ? _a : DEFAULT_MAX_CONTEXT_TOKENS;
}
const DEFAULT_EMBEDDING_MODELS = {
    [core_utils_1.AIProviderName.OPENAI]: 'text-embedding-3-small',
    [core_utils_1.AIProviderName.GOOGLE]: 'text-embedding-004',
    [core_utils_1.AIProviderName.AZURE]: 'text-embedding-3-small',
    [core_utils_1.AIProviderName.ACTIVEPIECES]: 'text-embedding-3-small',
    [core_utils_1.AIProviderName.OPENROUTER]: 'openai/text-embedding-3-small',
};
const WEB_SEARCH_MODE_BY_PROVIDER = {
    [core_utils_1.AIProviderName.ANTHROPIC]: 'native',
    [core_utils_1.AIProviderName.GOOGLE]: 'native',
    [core_utils_1.AIProviderName.OPENROUTER]: 'plugin',
    [core_utils_1.AIProviderName.ACTIVEPIECES]: 'plugin',
};
const NO_IMAGE_GENERATION_PROVIDERS = new Set([
    core_utils_1.AIProviderName.ANTHROPIC,
    core_utils_1.AIProviderName.MISTRAL,
]);
function buildProviderCapabilities(provider) {
    return {
        chatModels: exports.ALLOWED_CHAT_MODELS_BY_PROVIDER[provider],
        maxContextTokens: getMaxContextTokens({ provider }),
        defaultEmbeddingModel: DEFAULT_EMBEDDING_MODELS[provider],
        supportsEmbedding: DEFAULT_EMBEDDING_MODELS[provider] !== undefined,
        supportsImageGeneration: !NO_IMAGE_GENERATION_PROVIDERS.has(provider),
        webSearch: WEB_SEARCH_MODE_BY_PROVIDER[provider],
    };
}
exports.ACTIVEPIECES_CHAT_TIERS = [
    { id: 'fast', label: 'Fast', modelId: 'anthropic/claude-haiku-4.5', thinkingBudget: 5000, creditWeight: 2 },
    { id: 'smart', label: 'Expert', modelId: 'anthropic/claude-sonnet-4.6', thinkingBudget: 10000, creditWeight: 10 },
    { id: 'premium', label: 'Heavy', modelId: 'anthropic/claude-opus-4.8', thinkingBudget: 20000, creditWeight: 20 },
];
exports.DEFAULT_CHAT_TIER_ID = 'smart';
exports.AI_PROVIDER_CAPABILITIES = {
    [core_utils_1.AIProviderName.OPENAI]: buildProviderCapabilities(core_utils_1.AIProviderName.OPENAI),
    [core_utils_1.AIProviderName.ANTHROPIC]: buildProviderCapabilities(core_utils_1.AIProviderName.ANTHROPIC),
    [core_utils_1.AIProviderName.OPENROUTER]: buildProviderCapabilities(core_utils_1.AIProviderName.OPENROUTER),
    [core_utils_1.AIProviderName.AZURE]: buildProviderCapabilities(core_utils_1.AIProviderName.AZURE),
    [core_utils_1.AIProviderName.GOOGLE]: buildProviderCapabilities(core_utils_1.AIProviderName.GOOGLE),
    [core_utils_1.AIProviderName.CLOUDFLARE_GATEWAY]: buildProviderCapabilities(core_utils_1.AIProviderName.CLOUDFLARE_GATEWAY),
    [core_utils_1.AIProviderName.CUSTOM]: buildProviderCapabilities(core_utils_1.AIProviderName.CUSTOM),
    [core_utils_1.AIProviderName.BEDROCK]: buildProviderCapabilities(core_utils_1.AIProviderName.BEDROCK),
    [core_utils_1.AIProviderName.MISTRAL]: buildProviderCapabilities(core_utils_1.AIProviderName.MISTRAL),
    [core_utils_1.AIProviderName.ACTIVEPIECES]: buildProviderCapabilities(core_utils_1.AIProviderName.ACTIVEPIECES),
};
exports.aiProviderUtils = {
    getMaxContextTokens,
    getCuratedChatModels,
    isCuratedChatModelId,
};
//# sourceMappingURL=ai-providers.js.map