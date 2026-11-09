export declare const addCommentToTicketAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    token: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    subdomain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    ticket_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        token: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        subdomain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    comment_body: import("@agnocon/pieces-framework").LongTextProperty<false>;
    comment_html_body: import("@agnocon/pieces-framework").LongTextProperty<false>;
    public: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    author_email: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    uploads: import("@agnocon/pieces-framework").ArrayProperty<false>;
    via_followup_source_id: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=add-comment-to-ticket.d.ts.map