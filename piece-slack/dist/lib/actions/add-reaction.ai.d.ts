export declare const slackAddReaction: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    botToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    userToken: import("@agnocon/pieces-framework").SecretTextProperty<false>;
}>)[], {
    info: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    channel: import("@agnocon/pieces-framework").DropdownProperty<string, true, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        botToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        userToken: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    }>)[]>;
    ts: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    reaction: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    reactAsUser: import("@agnocon/pieces-framework").CheckboxProperty<true>;
}>;
//# sourceMappingURL=add-reaction.ai.d.ts.map