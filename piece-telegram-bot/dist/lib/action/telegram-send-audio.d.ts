export declare const telegramSendAudio: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    chat_id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    audio: import("@agnocon/pieces-framework").FileProperty<false, false>;
    audio_id: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    caption: import("@agnocon/pieces-framework").LongTextProperty<false>;
    format: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    duration: import("@agnocon/pieces-framework").NumberProperty<false>;
    performer: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    title: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    message_thread_id: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    disable_notification: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    protect_content: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    reply_to_message_id: import("@agnocon/pieces-framework").NumberProperty<false>;
    reply_markup: import("@agnocon/pieces-framework").JsonProperty<false>;
}>;
//# sourceMappingURL=telegram-send-audio.d.ts.map