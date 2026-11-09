export declare const xeroUpdateSalesInvoice: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    tenant_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    allow_authorised: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    invoice_id: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").DropdownProperty<any, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    reference: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    due_date: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    invoice_number: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    branding_theme_id: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").DropdownProperty<any, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    url: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    contact_id: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").DropdownProperty<any, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    status: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    sent_to_contact: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    replace_all_line_items: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    line_items: import("@agnocon/pieces-framework").ArrayProperty<false>;
}>;
//# sourceMappingURL=update-sales-invoice.d.ts.map