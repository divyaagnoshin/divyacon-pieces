export declare const insertMultipleRowsAction: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    serviceAccount: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    userEmail: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>)[], {
    input_type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    values: import("@agnocon/pieces-framework").DynamicProperties<true, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        serviceAccount: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        userEmail: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    }>)[]>;
    overwrite: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    check_for_duplicate: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    check_for_duplicate_column: import("@agnocon/pieces-framework").DynamicProperties<false, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        serviceAccount: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        userEmail: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    }>)[]>;
    as_string: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    headerRow: import("@agnocon/pieces-framework").NumberProperty<true>;
    includeTeamDrives: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    spreadsheetId: import("@agnocon/pieces-framework").DropdownProperty<string, false, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        serviceAccount: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        userEmail: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    }>)[]> | import("@agnocon/pieces-framework").DropdownProperty<string, true, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        serviceAccount: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        userEmail: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    }>)[]>;
    sheetId: import("@agnocon/pieces-framework").DropdownProperty<number, false, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        serviceAccount: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        userEmail: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    }>)[]> | import("@agnocon/pieces-framework").DropdownProperty<number, true, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        serviceAccount: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        userEmail: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    }>)[]>;
}>;
//# sourceMappingURL=insert-multiple-rows.action.d.ts.map