export declare const requestActionMessageAction: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    botToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    userToken: import("@agnocon/pieces-framework").SecretTextProperty<false>;
}>)[], {
    info: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    channel: import("@agnocon/pieces-framework").DropdownProperty<string, true, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        botToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        userToken: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    }>)[]>;
    text: import("@agnocon/pieces-framework").LongTextProperty<true>;
    actions: import("@agnocon/pieces-framework").ArrayProperty<false> | import("@agnocon/pieces-framework").ArrayProperty<true>;
    threadTs: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    username: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    profilePicture: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    replyBroadcast: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    mentionOriginFlow: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=request-action-message.d.ts.map