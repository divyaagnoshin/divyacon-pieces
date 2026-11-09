export declare const getEntryDetailsAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    subdomain: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    formIdentifier: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        subdomain: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    format: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    entryId: import("@agnocon/pieces-framework").NumberProperty<false>;
    filterField: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    filterOperator: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    filterValue: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    additionalFilterField: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    additionalFilterOperator: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    additionalFilterValue: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    filterLogic: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    sort: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    sortDirection: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    pageStart: import("@agnocon/pieces-framework").NumberProperty<false>;
    pageSize: import("@agnocon/pieces-framework").NumberProperty<false>;
    includeSystem: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=get-entry-details.d.ts.map