export declare const searchRecordsAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
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
    columnId: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        version: import("@agnocon/pieces-framework").StaticDropdownProperty<number, false>;
    }>>;
    whereCondition: import("@agnocon/pieces-framework").LongTextProperty<false>;
    limit: import("@agnocon/pieces-framework").NumberProperty<true>;
    sort: import("@agnocon/pieces-framework").LongTextProperty<false>;
}>;
//# sourceMappingURL=search-records.d.ts.map