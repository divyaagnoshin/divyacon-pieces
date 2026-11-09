export declare const findSubmissionByFieldAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    subdomain: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    formIdentifier: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        subdomain: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    format: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    fieldId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    searchValue: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    matchType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    maxResults: import("@agnocon/pieces-framework").NumberProperty<false>;
    sortOrder: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    includeMetadata: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=find-submission-by-field.d.ts.map