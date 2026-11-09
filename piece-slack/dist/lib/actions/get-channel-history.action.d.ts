export declare const slackGetChannelHistoryAiAction: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    botToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    userToken: import("@agnocon/pieces-framework").SecretTextProperty<false>;
}>)[], {
    channel: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    oldest: import("@agnocon/pieces-framework").NumberProperty<false>;
    latest: import("@agnocon/pieces-framework").NumberProperty<false>;
    inclusive: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=get-channel-history.action.d.ts.map