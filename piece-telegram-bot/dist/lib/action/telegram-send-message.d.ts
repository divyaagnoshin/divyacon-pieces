export declare const telegramSendMessage: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    chat_id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    message: import("@agnocon/pieces-framework").LongTextProperty<true>;
    format: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    message_thread_id: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    web_page_preview: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    disable_notification: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    protect_content: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    reply_to_message_id: import("@agnocon/pieces-framework").NumberProperty<false>;
    reply_markup: import("@agnocon/pieces-framework").JsonProperty<false>;
}>;
//# sourceMappingURL=telegram-send-message.d.ts.map