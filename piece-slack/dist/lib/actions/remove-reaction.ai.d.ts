export declare const slackRemoveReaction: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    botToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    userToken: import("@agnocon/pieces-framework").SecretTextProperty<false>;
}>)[], {
    reaction: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    channel: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    ts: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    file: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    reactAsUser: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=remove-reaction.ai.d.ts.map