export declare const slackSendMessageAction: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    botToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    userToken: import("@agnocon/pieces-framework").SecretTextProperty<false>;
}>)[], {
    info: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    channel: import("@agnocon/pieces-framework").DropdownProperty<string, true, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        botToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        userToken: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    }>)[]>;
    text: import("@agnocon/pieces-framework").LongTextProperty<false>;
    sendAsBot: import("@agnocon/pieces-framework").CheckboxProperty<true>;
    threadTs: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    username: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    profilePicture: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    iconEmoji: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    file: import("@agnocon/pieces-framework").FileProperty<false, false>;
    replyBroadcast: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    mentionOriginFlow: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    unfurlLinks: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    blocks: import("@agnocon/pieces-framework").JsonProperty<false>;
}>;
//# sourceMappingURL=send-message-action.d.ts.map