export declare const createUpdateRecordsBulk: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    realmHostname: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    userToken: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    appId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        realmHostname: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        userToken: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    tableId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        realmHostname: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        userToken: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    mergeField: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        realmHostname: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        userToken: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    records: import("@agnocon/pieces-framework").ArrayProperty<true>;
    mergeFieldBehavior: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}>;
//# sourceMappingURL=create-update-records-bulk.d.ts.map