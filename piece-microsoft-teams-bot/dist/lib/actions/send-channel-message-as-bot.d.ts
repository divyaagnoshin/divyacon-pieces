export declare const sendChannelMessageAsBotAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    appId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    appSecret: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    tenantId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    teamId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        appId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        appSecret: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        tenantId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    channelId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        appId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        appSecret: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        tenantId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    contentType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    content: import("@agnocon/pieces-framework").LongTextProperty<true>;
}>;
//# sourceMappingURL=send-channel-message-as-bot.d.ts.map