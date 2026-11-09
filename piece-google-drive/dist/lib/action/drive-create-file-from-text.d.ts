export declare const driveCreateFileFromText: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    serviceAccount: import("@agnocon/pieces-framework").LongTextProperty<true>;
    userEmail: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>)[], {
    file_name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    text: import("@agnocon/pieces-framework").LongTextProperty<true>;
    content_type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    parent_folder_id: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=drive-create-file-from-text.d.ts.map