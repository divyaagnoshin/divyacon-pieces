export declare const createDiscountAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiKey: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiSecret: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    uniqueIdentifier: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    isActive: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    duration: import("@agnocon/pieces-framework").StaticDropdownProperty<number, true>;
    durationInMonths: import("@agnocon/pieces-framework").NumberProperty<false>;
    amountOff: import("@agnocon/pieces-framework").NumberProperty<false>;
    percentOff: import("@agnocon/pieces-framework").NumberProperty<false>;
    maxRedemptions: import("@agnocon/pieces-framework").NumberProperty<false>;
    redeemBy: import("@agnocon/pieces-framework").DateTimeProperty<false>;
}>;
//# sourceMappingURL=create-discount.d.ts.map