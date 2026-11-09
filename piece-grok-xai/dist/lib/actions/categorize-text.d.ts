export declare const categorizeText: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    model: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    text: import("@agnocon/pieces-framework").LongTextProperty<true>;
    categories: import("@agnocon/pieces-framework").ArrayProperty<true>;
    allowMultiple: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    includeConfidence: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    customInstructions: import("@agnocon/pieces-framework").LongTextProperty<false>;
    enableContextSearch: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    temperature: import("@agnocon/pieces-framework").NumberProperty<false>;
    maxCompletionTokens: import("@agnocon/pieces-framework").NumberProperty<false>;
    reasoningEffort: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}>;
//# sourceMappingURL=categorize-text.d.ts.map