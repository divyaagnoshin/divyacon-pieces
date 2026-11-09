export declare const driveSearchFiles: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    serviceAccount: import("@agnocon/pieces-framework").LongTextProperty<true>;
    userEmail: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>)[], {
    query_term: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    operator: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    value: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    parent_folder_id: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    include_team_drives: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=drive-search-files.d.ts.map