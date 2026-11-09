export declare const sendEmail: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    from: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    to: import("@agnocon/pieces-framework").ArrayProperty<true>;
    cc: import("@agnocon/pieces-framework").ArrayProperty<false>;
    bcc: import("@agnocon/pieces-framework").ArrayProperty<false>;
    replyTo: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    subject: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    textBody: import("@agnocon/pieces-framework").LongTextProperty<false>;
    htmlBody: import("@agnocon/pieces-framework").LongTextProperty<false>;
    tag: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    trackOpens: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    messageStream: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=send-email.d.ts.map