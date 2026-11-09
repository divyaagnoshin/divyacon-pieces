export declare const askLocalAI: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    base_url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    access_token: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>, {
    model: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        base_url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        access_token: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    }>>;
    prompt: import("@agnocon/pieces-framework").LongTextProperty<true>;
    temperature: import("@agnocon/pieces-framework").NumberProperty<false>;
    maxTokens: import("@agnocon/pieces-framework").NumberProperty<false>;
    topP: import("@agnocon/pieces-framework").NumberProperty<false>;
    frequencyPenalty: import("@agnocon/pieces-framework").NumberProperty<false>;
    presencePenalty: import("@agnocon/pieces-framework").NumberProperty<false>;
    roles: import("@agnocon/pieces-framework").JsonProperty<false>;
}>;
//# sourceMappingURL=send-prompt.d.ts.map