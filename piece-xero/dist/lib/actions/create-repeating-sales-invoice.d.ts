export declare const xeroCreateRepeatingSalesInvoice: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    tenant_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    contact_id: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").DropdownProperty<any, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    schedule_period: import("@agnocon/pieces-framework").NumberProperty<true>;
    schedule_unit: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    due_date: import("@agnocon/pieces-framework").NumberProperty<true>;
    due_date_type: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    start_date: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    end_date: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    line_amount_types: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    currency_code: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").DropdownProperty<any, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    status: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    reference: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    branding_theme_id: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").DropdownProperty<any, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    approved_for_sending: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    send_copy: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    mark_as_sent: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    include_pdf: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    line_items: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
}>;
//# sourceMappingURL=create-repeating-sales-invoice.d.ts.map