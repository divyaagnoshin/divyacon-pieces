export declare const gristUpdateRecordAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    workspace_id: import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    document_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    table_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    record_id: import("@agnocon/pieces-framework").NumberProperty<true>;
    table_columns: import("@agnocon/pieces-framework").DynamicProperties<true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
}>;
//# sourceMappingURL=update-record.action.d.ts.map