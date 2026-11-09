export declare const telegramSendMediaAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    instructions: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    chat_id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    message_thread_id: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    media_type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    media: import("@agnocon/pieces-framework").DynamicProperties<false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    format: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    instructions_format: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    message: import("@agnocon/pieces-framework").LongTextProperty<false>;
    disable_notification: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    protect_content: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    reply_markup: import("@agnocon/pieces-framework").JsonProperty<false>;
}>;
//# sourceMappingURL=send-media.action.d.ts.map