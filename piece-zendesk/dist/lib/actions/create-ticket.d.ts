export declare const createTicketAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    token: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    subdomain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    subject: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    comment_body: import("@agnocon/pieces-framework").LongTextProperty<false>;
    comment_html_body: import("@agnocon/pieces-framework").LongTextProperty<false>;
    requester_email: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    requester_name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    assignee_email: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    priority: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    status: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    tags: import("@agnocon/pieces-framework").ArrayProperty<false>;
    organization_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        token: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        subdomain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    group_id: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        token: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        subdomain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    external_id: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    collaborator_emails: import("@agnocon/pieces-framework").ArrayProperty<false>;
    follower_emails: import("@agnocon/pieces-framework").ArrayProperty<false>;
    due_at: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    custom_fields: import("@agnocon/pieces-framework").DynamicProperties<false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        token: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        subdomain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    comment_public: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    brand_id: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        token: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        subdomain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    forum_topic_id: import("@agnocon/pieces-framework").NumberProperty<false>;
    problem_id: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        token: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        subdomain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
}>;
//# sourceMappingURL=create-ticket.d.ts.map