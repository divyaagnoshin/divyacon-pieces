export declare const sendEmailAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    recipients: import("@agnocon/pieces-framework").ArrayProperty<true>;
    from: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    subject: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    bodyContentType: import("@agnocon/pieces-framework").StaticDropdownProperty<"HTML" | "PlainText" | "AMP" | "CSS", false>;
    bodyContent: import("@agnocon/pieces-framework").LongTextProperty<false>;
    replyTo: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    templateName: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    merge: import("@agnocon/pieces-framework").ObjectProperty<false>;
    timeOffset: import("@agnocon/pieces-framework").NumberProperty<false>;
    poolName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    channelName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    encoding: import("@agnocon/pieces-framework").StaticDropdownProperty<"UserProvided" | "None" | "Raw7bit" | "Raw8bit" | "QuotedPrintable" | "Base64" | "Uue", false>;
    trackOpens: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    trackClicks: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=send-email.d.ts.map