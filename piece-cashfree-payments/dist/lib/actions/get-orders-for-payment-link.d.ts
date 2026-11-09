export declare const getOrdersForPaymentLink: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    clientId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    clientSecret: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>, {
    environment: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    linkId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    status: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    requestId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    idempotencyKey: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=get-orders-for-payment-link.d.ts.map