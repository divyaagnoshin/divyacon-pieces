export declare const createOrder: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    environment: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    merchant_id: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        environment: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        environment: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    line_items: import("@agnocon/pieces-framework").ArrayProperty<false> | import("@agnocon/pieces-framework").ArrayProperty<true>;
    address_line: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    city: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    postal_code: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    country: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    district: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    region: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    short_address: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    delivery_option: import("@agnocon/pieces-framework").StaticDropdownProperty<"vendor" | "courier", false> | import("@agnocon/pieces-framework").StaticDropdownProperty<"vendor" | "courier", true>;
    delivery_fees: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    delivery_fees_payer: import("@agnocon/pieces-framework").StaticDropdownProperty<"customer" | "vendor", false> | import("@agnocon/pieces-framework").StaticDropdownProperty<"customer" | "vendor", true>;
    notes: import("@agnocon/pieces-framework").LongTextProperty<false>;
    external_ref: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    idempotency_key: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=create-order.d.ts.map