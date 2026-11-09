export declare const googleDriveSearchFolder: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    serviceAccount: import("@agnocon/pieces-framework").LongTextProperty<true>;
    userEmail: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>)[], {
    queryTerm: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    operator: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    query: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    parentFolder: import("@agnocon/pieces-framework").DropdownProperty<string, false, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        serviceAccount: import("@agnocon/pieces-framework").LongTextProperty<true>;
        userEmail: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    }>)[]>;
    include_team_drives: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=search-folder-or-file.action.d.ts.map