export declare const findRecordAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    instanceUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    table: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        instanceUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    query: import("@agnocon/pieces-framework").LongTextProperty<true>;
    limit: import("@agnocon/pieces-framework").NumberProperty<false>;
    fields: import("@agnocon/pieces-framework").ArrayProperty<false>;
    sysparm_display_value: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    sysparm_exclude_reference_link: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    sysparm_query_no_domain: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    sysparm_view: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}>;
//# sourceMappingURL=find-record.d.ts.map