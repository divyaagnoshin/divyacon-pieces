export declare const listBlobs: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    connectionString: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    container: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        connectionString: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    includeSnapshots: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    prefix: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=list-blobs.d.ts.map