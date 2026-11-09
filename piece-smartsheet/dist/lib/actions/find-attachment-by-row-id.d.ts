export declare const findAttachmentByRowId: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    sheet_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>> | import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    row_id: import("@agnocon/pieces-framework").DropdownProperty<unknown, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    include_all: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    page: import("@agnocon/pieces-framework").NumberProperty<false>;
    page_size: import("@agnocon/pieces-framework").NumberProperty<false>;
    attachment_type_filter: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, false>;
    parent_type_filter: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, false>;
    min_file_size_kb: import("@agnocon/pieces-framework").NumberProperty<false>;
    max_file_size_kb: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=find-attachment-by-row-id.d.ts.map