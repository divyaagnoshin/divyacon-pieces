export declare const listUsers: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    botToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    userToken: import("@agnocon/pieces-framework").SecretTextProperty<false>;
}>)[], {
    includeBots: import("@agnocon/pieces-framework").CheckboxProperty<true>;
    includeDisabled: import("@agnocon/pieces-framework").CheckboxProperty<true>;
}>;
//# sourceMappingURL=list-users.d.ts.map