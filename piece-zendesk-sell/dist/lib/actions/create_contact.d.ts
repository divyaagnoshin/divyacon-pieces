export declare const createContact: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    api_token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    is_organization: import("@agnocon/pieces-framework").CheckboxProperty<true>;
    name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    last_name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    first_name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    email: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    phone: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    mobile: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    tags: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        api_token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    address: import("@agnocon/pieces-framework").JsonProperty<false>;
    custom_fields: import("@agnocon/pieces-framework").JsonProperty<false>;
    other_fields: import("@agnocon/pieces-framework").JsonProperty<false>;
}>;
//# sourceMappingURL=create_contact.d.ts.map