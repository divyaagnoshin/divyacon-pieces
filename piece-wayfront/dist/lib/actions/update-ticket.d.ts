export declare const updateTicketAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    workspaceUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    ticket_ref: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        workspaceUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    subject: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    status: import("@agnocon/pieces-framework").NumberProperty<false>;
    employees: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    tags: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    order: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    metadata: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=update-ticket.d.ts.map