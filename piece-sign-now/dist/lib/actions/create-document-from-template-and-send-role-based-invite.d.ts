export declare const createDocumentFromTemplateAndSendRoleBasedInviteAction: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>)[], {
    template_id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    document_name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    from: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    signers: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
    subject: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    message: import("@agnocon/pieces-framework").LongTextProperty<false>;
    cc: import("@agnocon/pieces-framework").ArrayProperty<false>;
    cc_subject: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    cc_message: import("@agnocon/pieces-framework").LongTextProperty<false>;
    expiration_days: import("@agnocon/pieces-framework").NumberProperty<false>;
    language: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}>;
//# sourceMappingURL=create-document-from-template-and-send-role-based-invite.d.ts.map