export declare const createDocumentFromTemplateAndSendInviteAction: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>)[], {
    template_id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    document_name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    to: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    from: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    subject: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    message: import("@agnocon/pieces-framework").LongTextProperty<false>;
    cc: import("@agnocon/pieces-framework").ArrayProperty<false>;
    cc_subject: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    cc_message: import("@agnocon/pieces-framework").LongTextProperty<false>;
    language: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    redirect_uri: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    close_redirect_uri: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    redirect_target: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}>;
//# sourceMappingURL=create-document-from-template-and-send-invite.d.ts.map