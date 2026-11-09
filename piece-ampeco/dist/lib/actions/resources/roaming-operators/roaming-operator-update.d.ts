/**
 * Generated from API version: 3.96.4
 */
export declare const roamingOperatorUpdateAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseApiUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    roamingOperator: import("@agnocon/pieces-framework").NumberProperty<true>;
    businessName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    partnerId: import("@agnocon/pieces-framework").NumberProperty<false>;
    enabled: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    cpoSettings__cpoQrcodePrefix: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    cpoSettings__manualEvseManagement: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    cpoSettings__applyCustomTariffsToEvsesWithRoamingTariff: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    cpoSettings__sendsPeriodicMeterUpdates: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    cpoSettings__externalTariffIntegration: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    cpoSettings__threatEvseStatusUnknownAs: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    cpoSettings__phaseAcPowerFormula: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}>;
//# sourceMappingURL=roaming-operator-update.d.ts.map