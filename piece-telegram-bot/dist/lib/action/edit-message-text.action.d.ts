export declare const telegramEditMessageTextAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    instructions: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    chat_id: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    message_id: import("@agnocon/pieces-framework").NumberProperty<false>;
    inline_message_id: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    text: import("@agnocon/pieces-framework").LongTextProperty<true>;
    format: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    instructions_format: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    disable_web_page_preview: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    reply_markup: import("@agnocon/pieces-framework").JsonProperty<false>;
}>;
//# sourceMappingURL=edit-message-text.action.d.ts.map