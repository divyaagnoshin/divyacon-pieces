export declare const extractDataFromText: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    model: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    text: import("@agnocon/pieces-framework").LongTextProperty<true>;
    extractionPrompt: import("@agnocon/pieces-framework").LongTextProperty<false>;
    fields: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
    enableContextSearch: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    strictExtraction: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    temperature: import("@agnocon/pieces-framework").NumberProperty<false>;
    maxCompletionTokens: import("@agnocon/pieces-framework").NumberProperty<false>;
    reasoningEffort: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    includeConfidence: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=extract-data.d.ts.map