/**
 * Generated from API version: 3.96.4
 */
export declare const currencyUpdateAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseApiUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    currency: import("@agnocon/pieces-framework").NumberProperty<true>;
    alphabeticCode: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    prefix: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    suffix: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    decimal: import("@agnocon/pieces-framework").NumberProperty<false>;
    unitPriceAndCalculationsDecimal: import("@agnocon/pieces-framework").NumberProperty<false>;
    enableUseOfMinorCurrencyUnit: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    minorUnitSign: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=currency-update.d.ts.map