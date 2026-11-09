export declare const sendEmail: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    to: import("@agnocon/pieces-framework").ArrayProperty<true>;
    from_name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    from: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    bcc: import("@agnocon/pieces-framework").ArrayProperty<false>;
    cc: import("@agnocon/pieces-framework").ArrayProperty<false>;
    reply_to: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    subject: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    content_type: import("@agnocon/pieces-framework").DropdownProperty<"text" | "html", true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    content: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>;
//# sourceMappingURL=send-email.d.ts.map