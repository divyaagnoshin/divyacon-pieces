export declare const searchInvoices: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    term: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    invoice_number: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    customer_type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    customer_id: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    department_id: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    deal_id: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    project_id: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    subscription_id: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    status: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, false>;
    purchase_order_number: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    payment_reference: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    invoice_date_after: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    invoice_date_before: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    updated_since: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    sort_field: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    sort_order: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    page_size: import("@agnocon/pieces-framework").NumberProperty<false>;
    page_number: import("@agnocon/pieces-framework").NumberProperty<false>;
    include_late_fees: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=search-invoices.d.ts.map