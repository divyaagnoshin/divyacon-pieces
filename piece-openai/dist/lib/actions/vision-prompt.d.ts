export declare const visionPrompt: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    image: import("@agnocon/pieces-framework").FileProperty<true, false>;
    prompt: import("@agnocon/pieces-framework").LongTextProperty<true>;
    detail: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    temperature: import("@agnocon/pieces-framework").NumberProperty<false>;
    maxTokens: import("@agnocon/pieces-framework").NumberProperty<false>;
    topP: import("@agnocon/pieces-framework").NumberProperty<false>;
    frequencyPenalty: import("@agnocon/pieces-framework").NumberProperty<false>;
    presencePenalty: import("@agnocon/pieces-framework").NumberProperty<false>;
    roles: import("@agnocon/pieces-framework").JsonProperty<false>;
}>;
//# sourceMappingURL=vision-prompt.d.ts.map