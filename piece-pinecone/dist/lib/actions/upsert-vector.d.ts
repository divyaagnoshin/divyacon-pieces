export declare const upsertVector: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").LongTextProperty<true>;
}>, {
    indexName: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    indexHost: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    namespace: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    vectorsInput: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    id: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    values: import("@agnocon/pieces-framework").ArrayProperty<false>;
    vectors: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
}>;
//# sourceMappingURL=upsert-vector.d.ts.map