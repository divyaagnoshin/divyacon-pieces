export declare const sendEmailAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    accountId: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    fromAddress: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    toAddress: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    subject: import("@agnocon/pieces-framework").LongTextProperty<true>;
    mailFormat: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    content: import("@agnocon/pieces-framework").LongTextProperty<true>;
    ccAddress: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    bccAddress: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    askReceipt: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    attachment: import("@agnocon/pieces-framework").FileProperty<false, false>;
    attachmentName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=send-email.d.ts.map