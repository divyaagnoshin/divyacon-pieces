export declare const sendInviteAction: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>)[], {
    document_id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    from: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    signers: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
    subject: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    message: import("@agnocon/pieces-framework").LongTextProperty<false>;
    cc: import("@agnocon/pieces-framework").ArrayProperty<false>;
    cc_subject: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    cc_message: import("@agnocon/pieces-framework").LongTextProperty<false>;
}>;
//# sourceMappingURL=send-invite.d.ts.map