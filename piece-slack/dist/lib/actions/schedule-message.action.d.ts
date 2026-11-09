export declare const slackScheduleMessageAction: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    botToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    userToken: import("@agnocon/pieces-framework").SecretTextProperty<false>;
}>)[], {
    channel: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    postAt: import("@agnocon/pieces-framework").NumberProperty<true>;
    text: import("@agnocon/pieces-framework").LongTextProperty<false>;
    threadTs: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    blocks: import("@agnocon/pieces-framework").JsonProperty<false>;
}>;
//# sourceMappingURL=schedule-message.action.d.ts.map