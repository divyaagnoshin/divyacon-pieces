export declare const createFormCoupon: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    formId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    code: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    enabled: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    target: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    discountType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    discountAmount: import("@agnocon/pieces-framework").NumberProperty<false>;
    discountPercentage: import("@agnocon/pieces-framework").NumberProperty<false>;
    expiresAt: import("@agnocon/pieces-framework").DateTimeProperty<false>;
}>;
//# sourceMappingURL=create-form-coupon.d.ts.map