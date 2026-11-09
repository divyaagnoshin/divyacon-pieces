export declare const getAllRefundsForOrder: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    clientId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    clientSecret: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>, {
    environment: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    orderId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    requestId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    idempotencyKey: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=get-all-refunds-for-order.d.ts.map