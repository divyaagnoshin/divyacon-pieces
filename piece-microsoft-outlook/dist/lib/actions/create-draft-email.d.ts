export declare const createDraftEmailAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    recipients: import("@agnocon/pieces-framework").ArrayProperty<true>;
    ccRecipients: import("@agnocon/pieces-framework").ArrayProperty<false>;
    bccRecipients: import("@agnocon/pieces-framework").ArrayProperty<false>;
    subject: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    bodyFormat: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    body: import("@agnocon/pieces-framework").LongTextProperty<true>;
    attachments: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
}>;
//# sourceMappingURL=create-draft-email.d.ts.map