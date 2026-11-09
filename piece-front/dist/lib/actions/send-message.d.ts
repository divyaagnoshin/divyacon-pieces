export declare const sendMessage: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    channel_id: import("@agnocon/pieces-framework").DropdownProperty<unknown, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    to: import("@agnocon/pieces-framework").ArrayProperty<true>;
    cc: import("@agnocon/pieces-framework").ArrayProperty<false>;
    bcc: import("@agnocon/pieces-framework").ArrayProperty<false>;
    subject: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    body: import("@agnocon/pieces-framework").LongTextProperty<true>;
    attachments: import("@agnocon/pieces-framework").ArrayProperty<false>;
    tag_ids: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<unknown, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
}>;
//# sourceMappingURL=send-message.d.ts.map