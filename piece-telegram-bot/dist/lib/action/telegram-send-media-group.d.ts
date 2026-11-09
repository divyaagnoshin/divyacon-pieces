export declare const telegramSendMediaGroup: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    chat_id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    media: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
    parse_mode: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    message_thread_id: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    disable_notification: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    protect_content: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    reply_to_message_id: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=telegram-send-media-group.d.ts.map