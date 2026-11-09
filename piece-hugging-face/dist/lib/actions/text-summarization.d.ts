export declare const textSummarization: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    contentType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    model: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    text: import("@agnocon/pieces-framework").LongTextProperty<true>;
    summaryLength: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    customMinLength: import("@agnocon/pieces-framework").NumberProperty<false>;
    customMaxLength: import("@agnocon/pieces-framework").NumberProperty<false>;
    cleanUpSpaces: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    truncationStrategy: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    useCache: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    waitForModel: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=text-summarization.d.ts.map