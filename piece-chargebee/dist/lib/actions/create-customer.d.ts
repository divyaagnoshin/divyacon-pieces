export declare const createCustomer: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    site: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    id: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    first_name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    last_name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    email: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    company: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    phone: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    locale: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    preferred_currency_code: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    auto_collection: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    net_term_days: import("@agnocon/pieces-framework").NumberProperty<false>;
    allow_direct_debit: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    vat_number: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    taxability: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    invoice_notes: import("@agnocon/pieces-framework").LongTextProperty<false>;
    meta_data: import("@agnocon/pieces-framework").ObjectProperty<false>;
    billing_address_first_name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    billing_address_last_name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    billing_address_line1: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    billing_address_line2: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    billing_address_city: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    billing_address_state: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    billing_address_zip: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    billing_address_country: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=create-customer.d.ts.map