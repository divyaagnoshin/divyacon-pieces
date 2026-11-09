export declare const wooCreateCoupon: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    consumerKey: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    consumerSecret: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    code: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    discount_type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    amount: import("@agnocon/pieces-framework").NumberProperty<true>;
    minimum_amount: import("@agnocon/pieces-framework").NumberProperty<true>;
}>;
//# sourceMappingURL=create-coupon.d.ts.map