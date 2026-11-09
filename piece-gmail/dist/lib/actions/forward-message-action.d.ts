export declare const gmailForwardMessageAction: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    serviceAccount: import("@agnocon/pieces-framework").LongTextProperty<true>;
    userEmail: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>)[], {
    message_id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    receiver: import("@agnocon/pieces-framework").ArrayProperty<true>;
    cc: import("@agnocon/pieces-framework").ArrayProperty<false>;
    bcc: import("@agnocon/pieces-framework").ArrayProperty<false>;
    note: import("@agnocon/pieces-framework").LongTextProperty<false>;
    sender_name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=forward-message-action.d.ts.map