export declare const sheetsDeleteMultipleRows: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    serviceAccount: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    userEmail: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>)[], {
    spreadsheet_id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    sheet_id: import("@agnocon/pieces-framework").NumberProperty<true>;
    mode: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    starting_row: import("@agnocon/pieces-framework").NumberProperty<false>;
    ending_row: import("@agnocon/pieces-framework").NumberProperty<false>;
    row_numbers: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=sheets-delete-multiple-rows.d.ts.map