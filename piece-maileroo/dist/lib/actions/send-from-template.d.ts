export declare const sendFromTemplate: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    keyType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    from: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    from_name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    to: import("@agnocon/pieces-framework").ArrayProperty<true>;
    subject: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    template_id: import("@agnocon/pieces-framework").NumberProperty<true>;
    template_data: import("@agnocon/pieces-framework").ObjectProperty<false>;
    cc: import("@agnocon/pieces-framework").ArrayProperty<false>;
    bcc: import("@agnocon/pieces-framework").ArrayProperty<false>;
    reply_to: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    attachments: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
    tracking: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=send-from-template.d.ts.map