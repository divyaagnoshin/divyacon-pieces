export declare const gmailAiReplyToThreadAction: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    serviceAccount: import("@agnocon/pieces-framework").LongTextProperty<true>;
    userEmail: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>)[], {
    message_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        serviceAccount: import("@agnocon/pieces-framework").LongTextProperty<true>;
        userEmail: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>)[]>;
    reply_type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    body_type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    body: import("@agnocon/pieces-framework").LongTextProperty<true>;
    sender_name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    attachment: import("@agnocon/pieces-framework").FileProperty<false, false>;
    attachment_name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=ai-reply-to-thread-action.d.ts.map