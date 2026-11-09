export declare const generateAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>, {
    prompt: import("@agnocon/pieces-framework").LongTextProperty<true>;
    model: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    knowledge: import("@agnocon/pieces-framework").ArrayProperty<false>;
    systemPrompt: import("@agnocon/pieces-framework").LongTextProperty<false>;
    maxTokens: import("@agnocon/pieces-framework").NumberProperty<false>;
    temperature: import("@agnocon/pieces-framework").NumberProperty<false>;
    topP: import("@agnocon/pieces-framework").NumberProperty<false>;
    avoidCommentary: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=generate.d.ts.map