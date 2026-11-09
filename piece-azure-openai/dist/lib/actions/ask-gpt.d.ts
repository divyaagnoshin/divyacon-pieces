export declare const askGpt: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    endpoint: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    deploymentId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    prompt: import("@agnocon/pieces-framework").LongTextProperty<true>;
    temperature: import("@agnocon/pieces-framework").NumberProperty<false>;
    maxTokens: import("@agnocon/pieces-framework").NumberProperty<true>;
    topP: import("@agnocon/pieces-framework").NumberProperty<false>;
    frequencyPenalty: import("@agnocon/pieces-framework").NumberProperty<false>;
    presencePenalty: import("@agnocon/pieces-framework").NumberProperty<false>;
    memoryKey: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    roles: import("@agnocon/pieces-framework").JsonProperty<false>;
}>;
//# sourceMappingURL=ask-gpt.d.ts.map