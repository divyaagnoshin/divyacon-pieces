export declare const createIndex: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").LongTextProperty<true>;
}>, {
    name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    dimension: import("@agnocon/pieces-framework").NumberProperty<true>;
    indexType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    cloud: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    region: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    environment: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    podType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    replicas: import("@agnocon/pieces-framework").NumberProperty<false>;
    shards: import("@agnocon/pieces-framework").NumberProperty<false>;
    pods: import("@agnocon/pieces-framework").NumberProperty<false>;
    metric: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    vectorType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    deletionProtection: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    waitUntilReady: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    suppressConflicts: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    tags: import("@agnocon/pieces-framework").JsonProperty<false>;
    sourceCollection: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=create-index.d.ts.map