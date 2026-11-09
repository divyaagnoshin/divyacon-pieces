export declare const createTicketAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    fromAddress: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    toAddress: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    subject: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    message: import("@agnocon/pieces-framework").LongTextProperty<true>;
    channel: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    via: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}>;
//# sourceMappingURL=create-ticket.d.ts.map