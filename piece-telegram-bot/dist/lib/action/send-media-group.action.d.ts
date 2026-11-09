export declare const telegramSendMediaGroupAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    instructions: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    chat_id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    message_thread_id: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    media: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
    parse_mode: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    disable_notification: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    protect_content: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    reply_to_message_id: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=send-media-group.action.d.ts.map