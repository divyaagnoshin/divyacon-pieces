export declare const addTagToTicketAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    token: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    subdomain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    ticket_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        token: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        subdomain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    tags: import("@agnocon/pieces-framework").ArrayProperty<true>;
    safe_update: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    updated_stamp: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=add-tag-to-ticket.d.ts.map