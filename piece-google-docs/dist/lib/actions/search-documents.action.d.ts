export declare const searchDocuments: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    serviceAccount: import("@agnocon/pieces-framework").LongTextProperty<true>;
    userEmail: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>)[], {
    name_contains: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    full_text_contains: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    max_results: import("@agnocon/pieces-framework").NumberProperty<false>;
    order_by: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    page_token: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=search-documents.action.d.ts.map