export declare const googleDriveListFiles: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    serviceAccount: import("@agnocon/pieces-framework").LongTextProperty<true>;
    userEmail: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>)[], {
    folderId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    include_team_drives: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    includeTrashed: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    depthLevel: import("@agnocon/pieces-framework").NumberProperty<false>;
    downloadFiles: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=list-files.action.d.ts.map