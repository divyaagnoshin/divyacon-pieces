export declare const updateContact: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    api_token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    contact_id: import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        api_token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>> | import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        api_token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    first_name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    last_name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    owner_id: import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        api_token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    customer_status: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    email: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    phone: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    tags: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        api_token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    address: import("@agnocon/pieces-framework").JsonProperty<false>;
    custom_fields: import("@agnocon/pieces-framework").JsonProperty<false>;
    other_fields: import("@agnocon/pieces-framework").JsonProperty<false>;
}>;
//# sourceMappingURL=update_contact.d.ts.map