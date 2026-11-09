export declare const updateOrderStatus: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    environment: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    order_id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    transition: import("@agnocon/pieces-framework").DropdownProperty<"confirm" | "ready-for-pickup" | "out-for-delivery" | "deliver" | "not-delivered" | "fulfill", true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        environment: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    reason: import("@agnocon/pieces-framework").LongTextProperty<false>;
    idempotency_key: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=update-order-status.d.ts.map