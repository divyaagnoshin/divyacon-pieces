export declare const sendReply: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    conversationId: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    text: import("@agnocon/pieces-framework").LongTextProperty<true>;
    customerEmail: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    draft: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    status: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    userId: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    cc: import("@agnocon/pieces-framework").ArrayProperty<false>;
    bcc: import("@agnocon/pieces-framework").ArrayProperty<false>;
}>;
//# sourceMappingURL=send-reply.d.ts.map