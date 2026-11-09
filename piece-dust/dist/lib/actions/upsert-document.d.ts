export declare const upsertDocument: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    workspaceId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}>, {
    datasource: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    documentId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    content: import("@agnocon/pieces-framework").LongTextProperty<true>;
    sourceUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    title: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    tags: import("@agnocon/pieces-framework").ArrayProperty<false>;
}>;
//# sourceMappingURL=upsert-document.d.ts.map