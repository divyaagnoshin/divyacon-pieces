export declare const converseWithDocumentAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    ibContext: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    apiRoot: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    conversation_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        apiToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        ibContext: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        apiRoot: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    question: import("@agnocon/pieces-framework").LongTextProperty<true>;
    document_ids: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<number, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        apiToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        ibContext: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        apiRoot: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    mode: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    fast_mode: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=converse-with-document.d.ts.map