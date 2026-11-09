export declare const sheetsFindRows: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    serviceAccount: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    userEmail: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>)[], {
    spreadsheet_id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    sheet_id: import("@agnocon/pieces-framework").NumberProperty<true>;
    column_name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    search_value: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    match_case: import("@agnocon/pieces-framework").CheckboxProperty<true>;
    starting_row: import("@agnocon/pieces-framework").NumberProperty<false>;
    number_of_rows: import("@agnocon/pieces-framework").NumberProperty<false>;
    header_row: import("@agnocon/pieces-framework").NumberProperty<true>;
    use_header_names: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=sheets-find-rows.d.ts.map