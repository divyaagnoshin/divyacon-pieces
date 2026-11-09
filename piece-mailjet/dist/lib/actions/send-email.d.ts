export declare const sendEmail: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").BasicAuthProperty, {
    fromEmail: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    fromName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    toEmails: import("@agnocon/pieces-framework").ArrayProperty<true>;
    subject: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    textPart: import("@agnocon/pieces-framework").LongTextProperty<false>;
    htmlPart: import("@agnocon/pieces-framework").LongTextProperty<false>;
    templateId: import("@agnocon/pieces-framework").NumberProperty<false>;
    templateVariables: import("@agnocon/pieces-framework").ObjectProperty<false>;
}>;
//# sourceMappingURL=send-email.d.ts.map