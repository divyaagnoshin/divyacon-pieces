export declare const askClaude: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    model: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    systemPrompt: import("@agnocon/pieces-framework").LongTextProperty<false>;
    temperature: import("@agnocon/pieces-framework").NumberProperty<false>;
    maxTokens: import("@agnocon/pieces-framework").NumberProperty<false>;
    prompt: import("@agnocon/pieces-framework").LongTextProperty<true>;
    image: import("@agnocon/pieces-framework").FileProperty<false, false>;
    roles: import("@agnocon/pieces-framework").JsonProperty<false>;
    thinkingMode: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    thinkingModeParams: import("@agnocon/pieces-framework").DynamicProperties<false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
}>;
//# sourceMappingURL=send-prompt.d.ts.map