export declare const findTicketsAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    token: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    subdomain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    search_type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    timeFilter: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
    ticket_id: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    status: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    priority: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    ticket_type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    tag: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    requester_email: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    assignee_email: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    content: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    custom_query: import("@agnocon/pieces-framework").LongTextProperty<false>;
    sort_by: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    sort_order: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}>;
//# sourceMappingURL=find-tickets.d.ts.map