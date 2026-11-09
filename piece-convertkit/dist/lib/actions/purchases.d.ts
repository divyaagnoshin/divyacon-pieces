export declare const listPurchases: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    page: import("@agnocon/pieces-framework").NumberProperty<true>;
}>;
export declare const getPurchaseById: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    purchaseId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>;
export declare const createSinglePurchase: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    pid: import("@agnocon/pieces-framework").NumberProperty<true>;
    lid: import("@agnocon/pieces-framework").NumberProperty<true>;
    name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    sku: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    unit_price: import("@agnocon/pieces-framework").NumberProperty<true>;
    quantity: import("@agnocon/pieces-framework").NumberProperty<true>;
    transactionId: import("@agnocon/pieces-framework").NumberProperty<true>;
    transactionTime: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    emailAddress: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    firstName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    status: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    currency: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    subtotal: import("@agnocon/pieces-framework").NumberProperty<false>;
    shipping: import("@agnocon/pieces-framework").NumberProperty<false>;
    discount: import("@agnocon/pieces-framework").NumberProperty<false>;
    tax: import("@agnocon/pieces-framework").NumberProperty<false>;
    total: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
export declare const createPurchases: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    transactionId: import("@agnocon/pieces-framework").NumberProperty<true>;
    transactionTime: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    emailAddress: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    firstName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    status: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    currency: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    subtotal: import("@agnocon/pieces-framework").NumberProperty<false>;
    shipping: import("@agnocon/pieces-framework").NumberProperty<false>;
    discount: import("@agnocon/pieces-framework").NumberProperty<false>;
    tax: import("@agnocon/pieces-framework").NumberProperty<false>;
    total: import("@agnocon/pieces-framework").NumberProperty<false>;
    multipleProducts: import("@agnocon/pieces-framework").JsonProperty<true>;
}>;
export declare const listPurchasesForSubscriber: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    subscriberId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>;
export declare const listPurchasesForProduct: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    productId: import("@agnocon/pieces-framework").NumberProperty<true>;
}>;
export declare const listPurchasesForForm: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    formId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
}>;
export declare const listPurchasesForSequence: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    sequenceId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>;
//# sourceMappingURL=purchases.d.ts.map