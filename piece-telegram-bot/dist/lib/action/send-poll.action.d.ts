export declare const telegramSendPollAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    instructions: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    chat_id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    message_thread_id: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    question: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    options: import("@agnocon/pieces-framework").ArrayProperty<true>;
    is_anonymous: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    allows_multiple_answers: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    correct_option_id: import("@agnocon/pieces-framework").NumberProperty<false>;
    explanation: import("@agnocon/pieces-framework").LongTextProperty<false>;
    explanation_parse_mode: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    open_period: import("@agnocon/pieces-framework").NumberProperty<false>;
    close_date: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    is_closed: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    disable_notification: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    protect_content: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    reply_to_message_id: import("@agnocon/pieces-framework").NumberProperty<false>;
    reply_markup: import("@agnocon/pieces-framework").JsonProperty<false>;
}>;
//# sourceMappingURL=send-poll.action.d.ts.map