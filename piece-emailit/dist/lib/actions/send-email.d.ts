export declare const sendEmailAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    to: import("@agnocon/pieces-framework").ArrayProperty<true>;
    from_name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    from_email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    cc: import("@agnocon/pieces-framework").ArrayProperty<false>;
    bcc: import("@agnocon/pieces-framework").ArrayProperty<false>;
    reply_to: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    subject: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    content_type: import("@agnocon/pieces-framework").StaticDropdownProperty<"text" | "html", false> | import("@agnocon/pieces-framework").StaticDropdownProperty<"text" | "html", true>;
    content: import("@agnocon/pieces-framework").LongTextProperty<true>;
    headers: import("@agnocon/pieces-framework").ObjectProperty<false>;
}>;
//# sourceMappingURL=send-email.d.ts.map