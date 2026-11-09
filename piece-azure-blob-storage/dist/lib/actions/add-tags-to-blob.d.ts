export declare const addTagsToBlob: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    connectionString: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    container: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        connectionString: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    blobName: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    tags: import("@agnocon/pieces-framework").ObjectProperty<false>;
    keepExistingTags: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=add-tags-to-blob.d.ts.map