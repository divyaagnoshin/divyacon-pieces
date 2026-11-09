export declare const sendEmail: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    from: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    to: import("@agnocon/pieces-framework").ArrayProperty<true>;
    subject: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    body_text: import("@agnocon/pieces-framework").LongTextProperty<false>;
    body_html: import("@agnocon/pieces-framework").LongTextProperty<false>;
    cc: import("@agnocon/pieces-framework").ArrayProperty<false>;
    in_reply_to: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    thread_id: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=send-email.d.ts.map