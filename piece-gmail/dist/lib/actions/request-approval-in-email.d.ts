export declare const requestApprovalInEmail: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    serviceAccount: import("@agnocon/pieces-framework").LongTextProperty<true>;
    userEmail: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>)[], {
    receiver: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    cc: import("@agnocon/pieces-framework").ArrayProperty<false>;
    bcc: import("@agnocon/pieces-framework").ArrayProperty<false>;
    subject: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    body: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    reply_to: import("@agnocon/pieces-framework").ArrayProperty<false>;
    sender_name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    from: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    in_reply_to: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=request-approval-in-email.d.ts.map