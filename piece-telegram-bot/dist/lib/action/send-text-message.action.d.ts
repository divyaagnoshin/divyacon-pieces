export declare const telegramSendMessageAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    instructions: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    chat_id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    message_thread_id: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    format: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    instructions_format: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    web_page_preview: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    disable_notification: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    protect_content: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    reply_to_message_id: import("@agnocon/pieces-framework").NumberProperty<false>;
    message: import("@agnocon/pieces-framework").LongTextProperty<true>;
    reply_markup: import("@agnocon/pieces-framework").JsonProperty<false>;
}>;
//# sourceMappingURL=send-text-message.action.d.ts.map