export declare const driveShareFile: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    serviceAccount: import("@agnocon/pieces-framework").LongTextProperty<true>;
    userEmail: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>)[], {
    file_id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    user_email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    role: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    send_invitation_email: import("@agnocon/pieces-framework").CheckboxProperty<true>;
}>;
//# sourceMappingURL=drive-share-file.d.ts.map