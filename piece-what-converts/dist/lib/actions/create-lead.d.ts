export declare const createLeadAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    api_token: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    api_secret: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    account_id: import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        api_token: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        api_secret: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    profile_id: import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        api_token: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        api_secret: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>> | import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        api_token: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        api_secret: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    lead_type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    first_name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    last_name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    email: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    phone_number: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    company_name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    notes: import("@agnocon/pieces-framework").LongTextProperty<false>;
    referring_source: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    referring_medium: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    send_notification: import("@agnocon/pieces-framework").CheckboxProperty<true>;
    date_created: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    quotable: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    quote_value: import("@agnocon/pieces-framework").NumberProperty<false>;
    sales_value: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=create-lead.d.ts.map