export declare const createRefund: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    clientId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    clientSecret: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>, {
    environment: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    orderId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    refundAmount: import("@agnocon/pieces-framework").NumberProperty<true>;
    refundId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    refundNote: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    refundSpeed: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    refundSplits: import("@agnocon/pieces-framework").LongTextProperty<false>;
    tags: import("@agnocon/pieces-framework").LongTextProperty<false>;
    requestId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    idempotencyKey: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=create-refund.d.ts.map