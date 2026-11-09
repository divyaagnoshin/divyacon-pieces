export declare const createSalesQuoteAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    document_nr: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    title: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    contact_id: import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    contact_sub_id: import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    user_id: import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    pr_project_id: import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    language_id: import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    bank_account_id: import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    currency_id: import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    payment_type_id: import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    header: import("@agnocon/pieces-framework").LongTextProperty<false>;
    footer: import("@agnocon/pieces-framework").LongTextProperty<false>;
    mwst_type: import("@agnocon/pieces-framework").StaticDropdownProperty<number, true>;
    mwst_is_net: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    show_position_taxes: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    is_valid_from: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    is_valid_until: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    contact_address_manual: import("@agnocon/pieces-framework").LongTextProperty<false>;
    delivery_address_type: import("@agnocon/pieces-framework").StaticDropdownProperty<number, false>;
    delivery_address_manual_text: import("@agnocon/pieces-framework").LongTextProperty<false>;
    api_reference: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    viewed_by_client_at: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    kb_terms_of_payment_template_id: import("@agnocon/pieces-framework").NumberProperty<false>;
    template_slug: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    positionFields: import("@agnocon/pieces-framework").DynamicProperties<true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
}>;
//# sourceMappingURL=create-sales-quote.d.ts.map