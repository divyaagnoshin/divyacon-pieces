export declare const sendEmailAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    instanceUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    to: import("@agnocon/pieces-framework").ArrayProperty<true>;
    subject: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    body: import("@agnocon/pieces-framework").LongTextProperty<true>;
    from: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    cc: import("@agnocon/pieces-framework").ArrayProperty<false>;
    bcc: import("@agnocon/pieces-framework").ArrayProperty<false>;
}>;
//# sourceMappingURL=send-email.d.ts.map