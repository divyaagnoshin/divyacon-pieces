export declare const baseUrl = "https://api.textcortex.com/v1";
export declare const unauthorizedMessage = "Error Occurred: 401 \n\nEnsure that your API key is valid. You can get your API key from:\n1. Sign up at https://textcortex.com\n2. Go to account settings\n3. Navigate to API Key section\n";
export declare const billingIssueMessage = "Error Occurred: 429 \n\n1. Check your TextCortex account balance and usage limits\n2. Upgrade your plan if needed\n3. Wait for rate limits to reset\n4. Try again\n\nFor guidance, visit: https://textcortex.com/pricing\n";
export declare const SOCIAL_MEDIA_PLATFORMS: {
    label: string;
    value: string;
}[];
export declare const LANGUAGES: {
    label: string;
    value: string;
}[];
export declare const PROGRAMMING_LANGUAGES: {
    label: string;
    value: string;
}[];
export declare const AI_MODELS: {
    label: string;
    value: string;
}[];
export declare const FORMALITY_LEVELS: {
    label: string;
    value: string;
}[];
export declare const CREATIVITY_LEVELS: {
    label: string;
    value: string;
}[];
export declare const TONE_OPTIONS: {
    label: string;
    value: string;
}[];
export declare const LENGTH_OPTIONS: {
    label: string;
    value: string;
}[];
export declare const API_ENDPOINTS: {
    CODES: string;
    EMAILS: string;
    PARAPHRASES: string;
    PRODUCT_DESCRIPTIONS: string;
    SOCIAL_MEDIA_POSTS: string;
    SUMMARIZATIONS: string;
    TRANSLATIONS: string;
    COMPLETIONS: string;
};
export declare const createCommonProperties: () => {
    model: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    max_tokens: import("@agnocon/pieces-framework").NumberProperty<false>;
    temperature: import("@agnocon/pieces-framework").NumberProperty<false>;
    n: import("@agnocon/pieces-framework").NumberProperty<false>;
    source_lang: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    target_lang: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    formality: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    context: import("@agnocon/pieces-framework").LongTextProperty<false>;
    creativity: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    tone: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    length: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
};
//# sourceMappingURL=common.d.ts.map