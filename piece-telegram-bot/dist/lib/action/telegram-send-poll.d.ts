export declare const telegramSendPoll: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    chat_id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
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
    message_thread_id: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    disable_notification: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    protect_content: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    reply_to_message_id: import("@agnocon/pieces-framework").NumberProperty<false>;
    reply_markup: import("@agnocon/pieces-framework").JsonProperty<false>;
}>;
//# sourceMappingURL=telegram-send-poll.d.ts.map