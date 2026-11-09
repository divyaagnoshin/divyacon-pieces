export declare const sendEmail: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").SecretTextProperty<true> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    dataResidency: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}>)[], {
    to: import("@agnocon/pieces-framework").ArrayProperty<true>;
    from: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    from_name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    reply_to: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    subject: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    content_type: import("@agnocon/pieces-framework").DropdownProperty<"text" | "html", true, (import("@agnocon/pieces-framework").SecretTextProperty<true> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        dataResidency: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    }>)[]>;
    content: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    attachments: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
}>;
//# sourceMappingURL=send-email.d.ts.map