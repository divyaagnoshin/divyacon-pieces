export declare const xeroUpdatePurchaseOrder: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    tenant_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    purchase_order_id: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").DropdownProperty<any, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    status: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    sent_to_contact: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    delivery_address: import("@agnocon/pieces-framework").LongTextProperty<false>;
    attention_to: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    telephone: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    delivery_instructions: import("@agnocon/pieces-framework").LongTextProperty<false>;
    expected_arrival_date: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=update-purchase-order.d.ts.map