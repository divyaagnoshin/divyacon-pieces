export declare const findRecordsAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    space_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    database_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    maxRecords: import("@agnocon/pieces-framework").NumberProperty<false>;
    pageSize: import("@agnocon/pieces-framework").NumberProperty<false>;
    filter: import("@agnocon/pieces-framework").LongTextProperty<false>;
}>;
//# sourceMappingURL=find-records.d.ts.map