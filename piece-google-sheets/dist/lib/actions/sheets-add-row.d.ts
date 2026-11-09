export declare const sheetsAddRow: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    serviceAccount: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    userEmail: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>)[], {
    spreadsheet_id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    sheet_id: import("@agnocon/pieces-framework").NumberProperty<true>;
    first_row_headers: import("@agnocon/pieces-framework").CheckboxProperty<true>;
    as_string: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    values: import("@agnocon/pieces-framework").JsonProperty<true>;
}>;
//# sourceMappingURL=sheets-add-row.d.ts.map