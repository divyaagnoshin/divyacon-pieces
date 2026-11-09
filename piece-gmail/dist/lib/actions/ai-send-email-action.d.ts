export declare const gmailAiSendEmailAction: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    serviceAccount: import("@agnocon/pieces-framework").LongTextProperty<true>;
    userEmail: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>)[], {
    receiver: import("@agnocon/pieces-framework").ArrayProperty<true>;
    cc: import("@agnocon/pieces-framework").ArrayProperty<false>;
    bcc: import("@agnocon/pieces-framework").ArrayProperty<false>;
    subject: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    body_type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    body: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    reply_to: import("@agnocon/pieces-framework").ArrayProperty<false>;
    sender_name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    from: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    attachments: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
    in_reply_to: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    draft: import("@agnocon/pieces-framework").CheckboxProperty<true>;
}>;
//# sourceMappingURL=ai-send-email-action.d.ts.map