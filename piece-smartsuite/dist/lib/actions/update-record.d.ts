export declare const updateRecord: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
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
    fields: import("@agnocon/pieces-framework").DynamicProperties<true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        accountId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
}>;
//# sourceMappingURL=update-record.d.ts.map