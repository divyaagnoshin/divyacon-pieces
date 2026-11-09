export declare const sendEmail: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    host: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    email: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    port: import("@agnocon/pieces-framework").StaticDropdownProperty<number, true>;
    TLS: import("@agnocon/pieces-framework").CheckboxProperty<true>;
}>, {
    from: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    senderName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    to: import("@agnocon/pieces-framework").ArrayProperty<true>;
    cc: import("@agnocon/pieces-framework").ArrayProperty<false>;
    replyTo: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    bcc: import("@agnocon/pieces-framework").ArrayProperty<false>;
    subject: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    body_type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    body: import("@agnocon/pieces-framework").LongTextProperty<true>;
    customHeaders: import("@agnocon/pieces-framework").ObjectProperty<false>;
    attachments: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
}>;
//# sourceMappingURL=send-email.d.ts.map