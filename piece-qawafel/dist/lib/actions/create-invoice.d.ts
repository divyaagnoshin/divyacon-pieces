export declare const createInvoice: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
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
    issue_date: import("@agnocon/pieces-framework").DateTimeProperty<true>;
    due_date: import("@agnocon/pieces-framework").DateTimeProperty<true>;
    line_items: import("@agnocon/pieces-framework").ArrayProperty<false> | import("@agnocon/pieces-framework").ArrayProperty<true>;
    order_id: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    shipping_fees: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    payment_start_date: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    payment_due_date: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    notes: import("@agnocon/pieces-framework").LongTextProperty<false>;
    external_ref: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    idempotency_key: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=create-invoice.d.ts.map