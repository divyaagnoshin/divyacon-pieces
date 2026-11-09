export declare const listPurchaseOrderItems: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    clientId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    clientSecret: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    oauthServerUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>, {
    buyerANID: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    documentNumber: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    orderStatus: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    routingStatus: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    startDate: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    endDate: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    top: import("@agnocon/pieces-framework").NumberProperty<false>;
    skip: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=list-purchase-order-items.d.ts.map