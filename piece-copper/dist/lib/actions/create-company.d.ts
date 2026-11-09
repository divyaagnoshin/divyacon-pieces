export declare const createCompany: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiKey: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    email_domain: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    details: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    phone_numbers: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
    address_street: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    address_city: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    address_state: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    address_postal_code: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    address_country: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    primaryContactId: import("@agnocon/pieces-framework").DropdownProperty<unknown, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiKey: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>> | import("@agnocon/pieces-framework").DropdownProperty<unknown, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiKey: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
}>;
//# sourceMappingURL=create-company.d.ts.map