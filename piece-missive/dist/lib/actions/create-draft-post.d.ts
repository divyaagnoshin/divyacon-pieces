export declare const createDraftPost: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    message_type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    subject: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    body: import("@agnocon/pieces-framework").LongTextProperty<true>;
    message_fields: import("@agnocon/pieces-framework").DynamicProperties<false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    conversation_options: import("@agnocon/pieces-framework").DynamicProperties<false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    send_immediately: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    schedule_send: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    send_at_timestamp: import("@agnocon/pieces-framework").NumberProperty<false>;
    auto_followup: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    attachments: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
}>;
//# sourceMappingURL=create-draft-post.d.ts.map