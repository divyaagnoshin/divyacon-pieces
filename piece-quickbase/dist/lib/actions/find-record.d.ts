export declare const findRecord: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
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
    filters: import("@agnocon/pieces-framework").ObjectProperty<false>;
    sortField: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        realmHostname: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        userToken: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    sortOrder: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    maxRecords: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=find-record.d.ts.map