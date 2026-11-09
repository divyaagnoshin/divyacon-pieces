export declare const sendEmailWithTemplate: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    from: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    to: import("@agnocon/pieces-framework").ArrayProperty<true>;
    cc: import("@agnocon/pieces-framework").ArrayProperty<false>;
    bcc: import("@agnocon/pieces-framework").ArrayProperty<false>;
    replyTo: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    templateId: import("@agnocon/pieces-framework").NumberProperty<true>;
    templateModel: import("@agnocon/pieces-framework").JsonProperty<true>;
    tag: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    trackOpens: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    messageStream: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=send-email-with-template.d.ts.map