export declare const createMessageAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    ticketId: import("@agnocon/pieces-framework").NumberProperty<true>;
    fromAgent: import("@agnocon/pieces-framework").CheckboxProperty<true>;
    senderId: import("@agnocon/pieces-framework").NumberProperty<true>;
    receiverId: import("@agnocon/pieces-framework").NumberProperty<true>;
    fromAddress: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    toAddress: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    message: import("@agnocon/pieces-framework").LongTextProperty<true>;
    subject: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    channel: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    via: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    sentDatetime: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=create-message.d.ts.map