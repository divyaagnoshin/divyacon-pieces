export declare const sheetsFindOrCreateRow: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    serviceAccount: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    userEmail: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>)[], {
    spreadsheet_id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    sheet_id: import("@agnocon/pieces-framework").NumberProperty<true>;
    column_name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    search_value: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    match_case: import("@agnocon/pieces-framework").CheckboxProperty<true>;
    header_row: import("@agnocon/pieces-framework").NumberProperty<true>;
    use_header_names: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    first_row_headers: import("@agnocon/pieces-framework").CheckboxProperty<true>;
    as_string: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    values: import("@agnocon/pieces-framework").JsonProperty<true>;
}>;
//# sourceMappingURL=sheets-find-or-create-row.d.ts.map