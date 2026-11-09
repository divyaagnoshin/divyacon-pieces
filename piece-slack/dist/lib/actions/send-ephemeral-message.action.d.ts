export declare const slackSendEphemeralMessageAction: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    botToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    userToken: import("@agnocon/pieces-framework").SecretTextProperty<false>;
}>)[], {
    channel: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    user: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    text: import("@agnocon/pieces-framework").LongTextProperty<false>;
    blocks: import("@agnocon/pieces-framework").JsonProperty<false>;
}>;
//# sourceMappingURL=send-ephemeral-message.action.d.ts.map