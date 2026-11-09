export declare const createSalesOrder: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    order_no: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    customer_id: import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    variant_id: import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    quantity: import("@agnocon/pieces-framework").NumberProperty<true>;
    price_per_unit: import("@agnocon/pieces-framework").NumberProperty<false>;
    total_discount: import("@agnocon/pieces-framework").NumberProperty<false>;
    tax_rate_id: import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    additional_order_rows: import("@agnocon/pieces-framework").JsonProperty<false>;
    status: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    location_id: import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    currency: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    order_created_date: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    delivery_date: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    customer_ref: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    additional_info: import("@agnocon/pieces-framework").LongTextProperty<false>;
    tracking_number: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    tracking_number_url: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    addresses: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
    ecommerce_order_type: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    ecommerce_store_name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    ecommerce_order_id: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=create-sales-order.d.ts.map