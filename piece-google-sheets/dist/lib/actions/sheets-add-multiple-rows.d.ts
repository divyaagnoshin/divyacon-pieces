export declare const sheetsAddMultipleRows: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    serviceAccount: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    userEmail: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>)[], {
    spreadsheet_id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    sheet_id: import("@agnocon/pieces-framework").NumberProperty<true>;
    input_type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    values: import("@agnocon/pieces-framework").JsonProperty<true>;
    overwrite: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    check_for_duplicate: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    duplicate_column: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    as_string: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    header_row: import("@agnocon/pieces-framework").NumberProperty<true>;
}>;
//# sourceMappingURL=sheets-add-multiple-rows.d.ts.map