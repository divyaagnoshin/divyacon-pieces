export declare const findRecordsAction: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>)[], {
    base_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    }>)[]>;
    table_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    }>)[]>;
    filter: import("@agnocon/pieces-framework").LongTextProperty<false>;
    cellFormat: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    take: import("@agnocon/pieces-framework").NumberProperty<false>;
    skip: import("@agnocon/pieces-framework").NumberProperty<false>;
    selectedRecordIds: import("@agnocon/pieces-framework").ArrayProperty<false>;
}>;
//# sourceMappingURL=find-records.d.ts.map