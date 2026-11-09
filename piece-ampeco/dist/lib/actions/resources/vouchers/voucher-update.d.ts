/**
 * Generated from API version: 3.96.4
 */
export declare const voucherUpdateAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseApiUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    voucher: import("@agnocon/pieces-framework").NumberProperty<true>;
    status: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    expireDate: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    validityPeriod: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    assignBeforeDate: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    amount: import("@agnocon/pieces-framework").NumberProperty<true>;
    prefix: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    title: import("@agnocon/pieces-framework").ArrayProperty<false>;
}>;
//# sourceMappingURL=voucher-update.d.ts.map