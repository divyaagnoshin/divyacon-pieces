export declare const gmailCreateDraftAction: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    serviceAccount: import("@agnocon/pieces-framework").LongTextProperty<true>;
    userEmail: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>)[], {
    receiver: import("@agnocon/pieces-framework").ArrayProperty<false>;
    cc: import("@agnocon/pieces-framework").ArrayProperty<false>;
    bcc: import("@agnocon/pieces-framework").ArrayProperty<false>;
    subject: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    body_type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    body: import("@agnocon/pieces-framework").LongTextProperty<true>;
    sender_name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    from: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    thread_id: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    attachments: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
}>;
//# sourceMappingURL=create-draft-action.d.ts.map