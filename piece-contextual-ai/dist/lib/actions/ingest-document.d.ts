export declare const ingestDocumentAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>, {
    datastoreId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    }>>;
    file: import("@agnocon/pieces-framework").FileProperty<true, false>;
    customMetadata: import("@agnocon/pieces-framework").ObjectProperty<false>;
    configuration: import("@agnocon/pieces-framework").LongTextProperty<false>;
}>;
//# sourceMappingURL=ingest-document.d.ts.map