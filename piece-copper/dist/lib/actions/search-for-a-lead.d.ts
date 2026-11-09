export declare const searchForALead: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiKey: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    phone_number: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    emails: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    assignee_ids: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<unknown, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiKey: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>> | import("@agnocon/pieces-framework").MultiSelectDropdownProperty<unknown, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiKey: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    status_ids: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<unknown, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiKey: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>> | import("@agnocon/pieces-framework").MultiSelectDropdownProperty<unknown, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiKey: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    customer_source_ids: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<unknown, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiKey: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>> | import("@agnocon/pieces-framework").MultiSelectDropdownProperty<unknown, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiKey: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    city: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    state: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    postal_code: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    country: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    tags: import("@agnocon/pieces-framework").ArrayProperty<false>;
    socials: import("@agnocon/pieces-framework").ArrayProperty<false>;
    followed: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    age: import("@agnocon/pieces-framework").NumberProperty<false>;
    page_size: import("@agnocon/pieces-framework").NumberProperty<false>;
    page_number: import("@agnocon/pieces-framework").NumberProperty<false>;
    sort_by: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    sort_direction: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    include_converted_leads: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    minimum_monetary_value: import("@agnocon/pieces-framework").NumberProperty<false>;
    maximum_monetary_value: import("@agnocon/pieces-framework").NumberProperty<false>;
    minimum_interaction_count: import("@agnocon/pieces-framework").NumberProperty<false>;
    maximum_interaction_count: import("@agnocon/pieces-framework").NumberProperty<false>;
    minimum_interaction_date: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    maximum_interaction_date: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    minimum_created_date: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    maximum_created_date: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    minimum_modified_date: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    maximum_modified_date: import("@agnocon/pieces-framework").DateTimeProperty<false>;
}>;
//# sourceMappingURL=search-for-a-lead.d.ts.map