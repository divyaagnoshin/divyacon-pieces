export declare const searchVector: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").LongTextProperty<true>;
}>, {
    indexName: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    indexHost: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    topK: import("@agnocon/pieces-framework").NumberProperty<true>;
    namespace: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    queryMethod: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    vector: import("@agnocon/pieces-framework").ArrayProperty<false>;
    id: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    sparseIndices: import("@agnocon/pieces-framework").ArrayProperty<false>;
    sparseValues: import("@agnocon/pieces-framework").ArrayProperty<false>;
    filter: import("@agnocon/pieces-framework").JsonProperty<false>;
    includeValues: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    includeMetadata: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=search-vector.d.ts.map