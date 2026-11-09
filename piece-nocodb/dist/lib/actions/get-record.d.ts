export declare const getRecordAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    version: import("@agnocon/pieces-framework").StaticDropdownProperty<number, false>;
}>, {
    workspaceId: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        version: import("@agnocon/pieces-framework").StaticDropdownProperty<number, false>;
    }>>;
    baseId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        version: import("@agnocon/pieces-framework").StaticDropdownProperty<number, false>;
    }>>;
    tableId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        version: import("@agnocon/pieces-framework").StaticDropdownProperty<number, false>;
    }>>;
    recordId: import("@agnocon/pieces-framework").NumberProperty<true>;
}>;
//# sourceMappingURL=get-record.d.ts.map