/**
 * Generated from API version: 3.96.4
 */
export declare const updateRoamingCustomTariffFilterAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseApiUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    roamingOperator: import("@agnocon/pieces-framework").NumberProperty<true>;
    customTariffFilter: import("@agnocon/pieces-framework").NumberProperty<true>;
    name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    status: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    countryCode: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    applicableCurrentTypes: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, false>;
    powerBelowKw: import("@agnocon/pieces-framework").NumberProperty<false>;
    evseIdPrefix: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    order: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=update-roaming-custom-tariff-filter.d.ts.map