export declare const xeroCreatePurchaseOrder: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    tenant_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    contact_id: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").DropdownProperty<any, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    line_item: import("@agnocon/pieces-framework").ObjectProperty<true>;
    date: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    delivery_date: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    line_amount_types: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    purchase_order_number: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    reference: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    branding_theme_id: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").DropdownProperty<any, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    status: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    delivery_address: import("@agnocon/pieces-framework").LongTextProperty<false>;
    attention_to: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    telephone: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    delivery_instructions: import("@agnocon/pieces-framework").LongTextProperty<false>;
    expected_arrival_date: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=create-purchase-order.d.ts.map