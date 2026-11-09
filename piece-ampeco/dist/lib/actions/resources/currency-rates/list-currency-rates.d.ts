/**
 * Generated from API version: 3.96.4
 */
export declare const listCurrencyRatesAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseApiUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    filter__base: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    filter__target: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    filter__updatedBefore: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    filter__updatedAfter: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    per_page: import("@agnocon/pieces-framework").NumberProperty<false>;
    usePagination: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=list-currency-rates.d.ts.map