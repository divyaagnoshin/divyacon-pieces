export declare const addPermission: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    serviceAccount: import("@agnocon/pieces-framework").LongTextProperty<true>;
    userEmail: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>)[], {
    fileId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    user_email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    permission_name: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    include_team_drives: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    send_invitation_email: import("@agnocon/pieces-framework").CheckboxProperty<true>;
}>;
//# sourceMappingURL=add-permission.action.d.ts.map