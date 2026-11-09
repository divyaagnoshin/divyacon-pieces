export declare const telegramSendDocument: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    chat_id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    document: import("@agnocon/pieces-framework").FileProperty<false, false>;
    document_id: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    caption: import("@agnocon/pieces-framework").LongTextProperty<false>;
    format: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    message_thread_id: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    disable_notification: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    protect_content: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    reply_to_message_id: import("@agnocon/pieces-framework").NumberProperty<false>;
    reply_markup: import("@agnocon/pieces-framework").JsonProperty<false>;
}>;
//# sourceMappingURL=telegram-send-document.d.ts.map