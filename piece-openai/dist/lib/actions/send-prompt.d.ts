export declare const askOpenAI: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    model: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    prompt: import("@agnocon/pieces-framework").LongTextProperty<true>;
    temperature: import("@agnocon/pieces-framework").NumberProperty<false>;
    maxTokens: import("@agnocon/pieces-framework").NumberProperty<true>;
    topP: import("@agnocon/pieces-framework").NumberProperty<false>;
    frequencyPenalty: import("@agnocon/pieces-framework").NumberProperty<false>;
    presencePenalty: import("@agnocon/pieces-framework").NumberProperty<false>;
    memoryKey: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    roles: import("@agnocon/pieces-framework").JsonProperty<false>;
}>;
//# sourceMappingURL=send-prompt.d.ts.map