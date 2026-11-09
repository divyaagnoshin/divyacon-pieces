export declare const attachFileToRow: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    sheet_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>> | import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    row_id: import("@agnocon/pieces-framework").DropdownProperty<unknown, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    attachment_type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    file: import("@agnocon/pieces-framework").FileProperty<false, false>;
    url: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    attachment_name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    attachment_sub_type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    mime_type: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=attach-file-to-row.d.ts.map