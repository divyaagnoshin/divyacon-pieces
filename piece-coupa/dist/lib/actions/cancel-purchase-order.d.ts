export declare const cancelPurchaseOrder: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    instanceUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    clientId: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    clientSecret: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    scope: import("@agnocon/pieces-framework").LongTextProperty<true>;
}>, {
    purchaseOrderId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        instanceUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        clientId: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        clientSecret: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        scope: import("@agnocon/pieces-framework").LongTextProperty<true>;
    }>>;
}>;
//# sourceMappingURL=cancel-purchase-order.d.ts.map