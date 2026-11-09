export declare const sendEmail: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}>, {
    domain: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    }>>;
    from: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    to: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    cc: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    bcc: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    replyTo: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    subject: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    text: import("@agnocon/pieces-framework").LongTextProperty<false>;
    html: import("@agnocon/pieces-framework").LongTextProperty<false>;
}>;
//# sourceMappingURL=send-email.d.ts.map