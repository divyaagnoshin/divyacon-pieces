export declare const replyEmailAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    messageId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    bodyFormat: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    replyBody: import("@agnocon/pieces-framework").LongTextProperty<true>;
    ccRecipients: import("@agnocon/pieces-framework").ArrayProperty<false>;
    bccRecipients: import("@agnocon/pieces-framework").ArrayProperty<false>;
    attachments: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
    draft: import("@agnocon/pieces-framework").CheckboxProperty<true>;
}>;
//# sourceMappingURL=reply-email.d.ts.map