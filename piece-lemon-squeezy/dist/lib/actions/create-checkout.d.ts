export declare const createCheckout: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    storeId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    productId: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    variantId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    customerEmail: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    customerName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    customPrice: import("@agnocon/pieces-framework").NumberProperty<false>;
    discountCode: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    redirectUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    expiresAt: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    customData: import("@agnocon/pieces-framework").JsonProperty<false>;
}>;
//# sourceMappingURL=create-checkout.d.ts.map