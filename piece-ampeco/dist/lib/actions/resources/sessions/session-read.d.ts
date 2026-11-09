/**
 * Generated from API version: 3.96.4
 */
export declare const sessionReadAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseApiUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    session: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    withClockAlignedEnergyConsumption: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    clockAlignedInterval: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    withAuthorization: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    withChargingPeriods: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    withChargingPeriodsPriceBreakdown: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    withPriceBreakdown: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    include: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, false>;
}>;
//# sourceMappingURL=session-read.d.ts.map