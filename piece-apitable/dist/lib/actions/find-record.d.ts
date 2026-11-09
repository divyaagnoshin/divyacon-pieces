export declare const findRecordAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    apiTableUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    space_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        apiTableUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    datasheet_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        apiTableUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    recordIds: import("@agnocon/pieces-framework").ArrayProperty<false>;
    fieldNames: import("@agnocon/pieces-framework").ArrayProperty<false>;
    maxRecords: import("@agnocon/pieces-framework").NumberProperty<false>;
    pageSize: import("@agnocon/pieces-framework").NumberProperty<false>;
    pageNum: import("@agnocon/pieces-framework").NumberProperty<false>;
    filter: import("@agnocon/pieces-framework").LongTextProperty<false>;
}>;
//# sourceMappingURL=find-record.d.ts.map