export declare const attachFileToRecordAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    instanceUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    table: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        instanceUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    record: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        instanceUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    manual_sys_id: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    file_name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    content_type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    fileBase64: import("@agnocon/pieces-framework").LongTextProperty<false>;
    filePath: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    encryption_context: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=attach-file-to-record.d.ts.map