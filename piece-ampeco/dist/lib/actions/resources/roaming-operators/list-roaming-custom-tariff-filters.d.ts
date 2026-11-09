/**
 * Generated from API version: 3.96.4
 */
export declare const listRoamingCustomTariffFiltersAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseApiUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    roamingOperator: import("@agnocon/pieces-framework").NumberProperty<true>;
    filter__status: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    filter__createdAfter: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    filter__createdBefore: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    per_page: import("@agnocon/pieces-framework").NumberProperty<false>;
    usePagination: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=list-roaming-custom-tariff-filters.d.ts.map