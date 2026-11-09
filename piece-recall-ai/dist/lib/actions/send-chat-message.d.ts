export declare const sendChatMessage: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    server: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}>, {
    bot_id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    message: import("@agnocon/pieces-framework").LongTextProperty<true>;
    to: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    pin: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=send-chat-message.d.ts.map