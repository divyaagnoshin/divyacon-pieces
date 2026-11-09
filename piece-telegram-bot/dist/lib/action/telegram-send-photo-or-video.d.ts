export declare const telegramSendPhotoOrVideo: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    chat_id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    media_type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    media: import("@agnocon/pieces-framework").DynamicProperties<false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    format: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    message: import("@agnocon/pieces-framework").LongTextProperty<false>;
    message_thread_id: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    disable_notification: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    protect_content: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    reply_markup: import("@agnocon/pieces-framework").JsonProperty<false>;
}>;
//# sourceMappingURL=telegram-send-photo-or-video.d.ts.map