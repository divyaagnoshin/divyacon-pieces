export declare const sheetsGetNextRows: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    serviceAccount: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    userEmail: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>)[], {
    spreadsheet_id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    sheet_id: import("@agnocon/pieces-framework").NumberProperty<true>;
    start_row: import("@agnocon/pieces-framework").NumberProperty<true>;
    header_row: import("@agnocon/pieces-framework").NumberProperty<true>;
    use_header_names: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    mem_key: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    group_size: import("@agnocon/pieces-framework").NumberProperty<true>;
}>;
//# sourceMappingURL=sheets-get-next-rows.d.ts.map