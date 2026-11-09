export declare const createDraftReply: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    conversation_id: import("@agnocon/pieces-framework").DropdownProperty<unknown, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    body: import("@agnocon/pieces-framework").LongTextProperty<true>;
    subject: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    author_id: import("@agnocon/pieces-framework").DropdownProperty<unknown, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    channel_id: import("@agnocon/pieces-framework").DropdownProperty<unknown, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    to: import("@agnocon/pieces-framework").ArrayProperty<false>;
    cc: import("@agnocon/pieces-framework").ArrayProperty<false>;
    bcc: import("@agnocon/pieces-framework").ArrayProperty<false>;
    attachments: import("@agnocon/pieces-framework").ArrayProperty<false>;
    mode: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    signature_id: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    should_add_default_signature: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=create-draft-reply.d.ts.map