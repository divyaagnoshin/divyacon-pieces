export declare const updateTicketAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    ticketId: import("@agnocon/pieces-framework").NumberProperty<true>;
    subject: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    status: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    channel: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    customerId: import("@agnocon/pieces-framework").NumberProperty<false>;
    customerEmail: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    fromAgent: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    isUnread: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    spam: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    externalId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=update-ticket.d.ts.map