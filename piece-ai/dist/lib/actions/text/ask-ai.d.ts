export declare const askAI: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").PieceAuthProperty, {
    provider: import("@agnocon/pieces-framework").DropdownProperty<string, true, undefined>;
    model: import("@agnocon/pieces-framework").DropdownProperty<string, true, undefined>;
    prompt: import("@agnocon/pieces-framework").LongTextProperty<true>;
    conversationKey: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    creativity: import("@agnocon/pieces-framework").NumberProperty<false>;
    maxOutputTokens: import("@agnocon/pieces-framework").NumberProperty<false>;
    webSearch: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    webSearchOptions: import("@agnocon/pieces-framework").DynamicProperties<false, undefined>;
}>;
//# sourceMappingURL=ask-ai.d.ts.map