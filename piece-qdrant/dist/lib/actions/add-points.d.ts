export declare const addPointsToCollection: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    serverAddress: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    collectionName: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    embeddings: import("@agnocon/pieces-framework").FileProperty<true, false>;
    embeddingsIds: import("@agnocon/pieces-framework").ArrayProperty<false>;
    distance: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    payload: import("@agnocon/pieces-framework").JsonProperty<false>;
    storage: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}>;
//# sourceMappingURL=add-points.d.ts.map