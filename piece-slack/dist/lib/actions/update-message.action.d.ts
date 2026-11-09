export declare const slackUpdateMessageAiAction: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    botToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    userToken: import("@agnocon/pieces-framework").SecretTextProperty<false>;
}>)[], {
    channel: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    ts: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    text: import("@agnocon/pieces-framework").LongTextProperty<true>;
    blocks: import("@agnocon/pieces-framework").JsonProperty<false>;
}>;
//# sourceMappingURL=update-message.action.d.ts.map