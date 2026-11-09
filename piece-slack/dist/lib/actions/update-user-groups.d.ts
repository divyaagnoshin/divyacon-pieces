export declare const updateGroupUsersAction: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    botToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    userToken: import("@agnocon/pieces-framework").SecretTextProperty<false>;
}>)[], {
    handle: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    userIds: import("@agnocon/pieces-framework").ArrayProperty<false>;
    appendUsers: import("@agnocon/pieces-framework").CheckboxProperty<true>;
}>;
//# sourceMappingURL=update-user-groups.d.ts.map