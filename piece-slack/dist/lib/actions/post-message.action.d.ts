export declare const slackPostMessageAction: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    botToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    userToken: import("@agnocon/pieces-framework").SecretTextProperty<false>;
}>)[], {
    channel: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    text: import("@agnocon/pieces-framework").LongTextProperty<false>;
    threadTs: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    replyBroadcast: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    sendAsUser: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    unfurlLinks: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    blocks: import("@agnocon/pieces-framework").JsonProperty<false>;
}>;
//# sourceMappingURL=post-message.action.d.ts.map