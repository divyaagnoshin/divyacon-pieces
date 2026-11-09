export declare const createProduct: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    base_url: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    productType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    code: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    description: import("@agnocon/pieces-framework").LongTextProperty<false>;
    descriptionHTML: import("@agnocon/pieces-framework").LongTextProperty<false>;
    logoURL: import("@agnocon/pieces-framework").LongTextProperty<false>;
    groupName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    price: import("@agnocon/pieces-framework").NumberProperty<false>;
    currencyId: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    unit: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    frequency: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    fee: import("@agnocon/pieces-framework").NumberProperty<false>;
    cycles: import("@agnocon/pieces-framework").NumberProperty<false>;
    signupFee: import("@agnocon/pieces-framework").NumberProperty<false>;
    customPeriodType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    customPeriodCount: import("@agnocon/pieces-framework").NumberProperty<false>;
    trialDayCount: import("@agnocon/pieces-framework").NumberProperty<false>;
    gracePeriodDayCount: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=create-product.d.ts.map