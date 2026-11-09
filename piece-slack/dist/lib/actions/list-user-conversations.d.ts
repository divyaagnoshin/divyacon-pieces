export declare const listUserConversationsAction: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    botToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    userToken: import("@agnocon/pieces-framework").SecretTextProperty<false>;
}>)[], {
    user: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    types: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    excludeArchived: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=list-user-conversations.d.ts.map