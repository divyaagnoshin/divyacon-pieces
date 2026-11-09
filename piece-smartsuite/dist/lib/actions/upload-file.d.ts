export declare const uploadFile: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    accountId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    solutionId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        accountId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    tableId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        accountId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    recordId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    field: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        accountId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    file: import("@agnocon/pieces-framework").FileProperty<true, false>;
}>;
//# sourceMappingURL=upload-file.d.ts.map