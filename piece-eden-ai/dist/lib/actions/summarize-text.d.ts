export declare const summarizeTextAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    provider: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    text: import("@agnocon/pieces-framework").LongTextProperty<true>;
    output_sentences: import("@agnocon/pieces-framework").NumberProperty<false>;
    language: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    model: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    fallback_providers: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    show_original_response: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=summarize-text.d.ts.map