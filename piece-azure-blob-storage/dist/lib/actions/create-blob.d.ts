export declare const createBlob: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    connectionString: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    container: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        connectionString: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    blobName: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    file: import("@agnocon/pieces-framework").FileProperty<true, false>;
    tags: import("@agnocon/pieces-framework").ObjectProperty<false>;
}>;
//# sourceMappingURL=create-blob.d.ts.map