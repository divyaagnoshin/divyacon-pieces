export declare const slackSendDirectMessageAction: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    botToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    userToken: import("@agnocon/pieces-framework").SecretTextProperty<false>;
}>)[], {
    userId: import("@agnocon/pieces-framework").DropdownProperty<string, true, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        botToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        userToken: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    }>)[]>;
    text: import("@agnocon/pieces-framework").LongTextProperty<true>;
    username: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    profilePicture: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    iconEmoji: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    mentionOriginFlow: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    blocks: import("@agnocon/pieces-framework").JsonProperty<false>;
    unfurlLinks: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=send-direct-message-action.d.ts.map