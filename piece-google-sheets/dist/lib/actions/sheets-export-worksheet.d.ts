export declare const sheetsExportWorksheet: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    serviceAccount: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    userEmail: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>)[], {
    spreadsheet_id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    sheet_id: import("@agnocon/pieces-framework").NumberProperty<true>;
    format: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    return_as_text: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=sheets-export-worksheet.d.ts.map